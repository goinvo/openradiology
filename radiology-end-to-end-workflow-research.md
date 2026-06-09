# Radiology End-to-End Workflow — Research Report

## Executive Summary

Radiology is not a single event — it is a longitudinal chain of clinical, administrative, and technical steps that begins before any scan is ordered and continues through treatment and long-term monitoring. For product designers, understanding this chain matters because failure points are distributed across every phase: at ordering, at authorization, at scheduling, at scan time, at interpretation, at communication, and at follow-up. No single system owns the full workflow today, which is the core design opportunity space.

---

## Step 0 — Clinical Encounter & Symptom Presentation

**What happens:**
- Patient presents to a provider (PCP, ER, urgent care, or specialist) with symptoms or risk factors
- Provider takes history, performs physical exam, orders labs
- Provider decides imaging is clinically warranted

**Who is involved:** Ordering physician (MD/DO/NP/PA), patient

**Systems touched:** EHR (Epic, Cerner, Oracle Health)

**Decision point:** Which modality? Which body part? Which protocol? The ordering provider writes the "clinical indication" — a short phrase like "right lower quadrant pain, rule out appendicitis" — that determines how the study is prioritized and interpreted.

**What can go wrong:**
- Incorrect modality ordered (e.g., X-ray ordered when MRI is clinically appropriate)
- Vague or missing clinical indication → radiologist has insufficient context
- Duplicate orders (e.g., two providers ordering the same study)
- Wrong body part specified

---

## Step 1 — Imaging Order Placed in EHR

**What happens:**
- Provider enters a structured imaging order in the EHR
- Order includes: modality, body region, laterality, contrast preference, clinical indication, urgency (routine, urgent, STAT)
- Order is transmitted to the Radiology Information System (RIS)

**Who is involved:** Ordering provider, EHR/RIS systems

**Systems touched:** EHR → RIS (via HL7 interface)

**What can go wrong:**
- HL7 interface errors cause orders to drop or duplicate
- Contrast preference not specified → tech has to call back
- Urgency mis-flagged (STAT order placed for routine finding, or vice versa)

---

## Step 2 — Insurance Prior Authorization

**What happens:**
- For non-emergent studies, the ordering clinic (or a dedicated auth team) submits a prior authorization request to the payer
- Payer reviews against clinical criteria (often using guidelines from AIM, eviCore, Magellan)
- Payer approves, denies, or requests peer-to-peer review

**Who is involved:** Ordering clinic's front office / auth team, payer's utilization management team, sometimes the ordering physician (for peer-to-peer)

**Systems touched:** Payer portals, fax, phone (fax is still dominant), some automated via CRD/DTR FHIR standards (emerging)

**Timeline:** 24 hours to 5+ business days for routine; waived for STAT/ER

**What can go wrong:**
- Auth denied — delays care by days to weeks
- Auth approved for wrong modality or body part
- Auth expires before patient is scheduled
- ER/inpatient studies bypass auth but trigger retrospective denial
- Staff time burden: 40+ minutes per auth request on average

---

## Step 3 — Scheduling

**What happens:**
- Scheduler contacts patient to book the appointment
- Scheduler confirms auth is in place, verifies insurance, explains prep instructions
- Study-specific prep is communicated: fasting (CT with contrast), no metal (MRI), bowel prep (CT colonography), etc.
- Patient receives appointment confirmation

**Who is involved:** Scheduling staff, patient

**Systems touched:** RIS scheduling module, patient communication tools (phone, text, patient portal)

**What can go wrong:**
- Patient given incomplete prep instructions → scan cannot be performed, slot wasted
- Scheduling at wrong facility (auth approved for facility A, patient booked at facility B)
- No-shows and late cancellations are extremely common (~15–20% in outpatient radiology)
- MRI safety screening not done pre-arrival → patient turned away

---

## Step 4 — Pre-Scan Intake & Safety Screening

**What happens:**
- Patient arrives and checks in
- Staff verify identity, insurance, and consent
- MRI patients complete a detailed safety questionnaire (implants, pacemakers, claustrophobia, prior surgeries)
- Contrast patients are screened: kidney function (eGFR required for iodinated contrast), allergy history, metformin use
- IV access placed if contrast or sedation needed
- Patient is changed, positioned, and brought to the scanner room

**Who is involved:** Front desk, radiology nurse or tech, patient

**Systems touched:** RIS, EHR (to pull eGFR labs), MRI screening forms (often paper or standalone iPad tools)

**What can go wrong:**
- Contraindicated implant discovered at last moment → scan cancelled
- eGFR not available or too low → contrast cannot be given → study downgraded or rescheduled
- Claustrophobia → patient cannot tolerate MRI → reschedule with sedation or switch to CT
- IV access fails → delayed start or contrast study abandoned
- Allergic reaction to contrast (rare but serious; requires crash cart access)

---

## Step 5 — Image Acquisition (The Scan)

**What happens:**
- Radiologic technologist (RT) positions the patient, selects the protocol, and runs the scan
- Protocol = a specific set of sequences, timing, and parameters (e.g., "CT abdomen/pelvis with and without contrast" vs. "MRI brain with diffusion")
- For dynamic studies (CT angiography, MRI with gadolinium), contrast is injected at precise timing
- RT monitors image quality in real time
- Additional sequences added if initial images are suboptimal or findings warrant it
- Patient released once images pass QC check

**Who is involved:** Radiologic technologist (operator), radiology nurse (contrast administration), patient

**Systems touched:** Modality (CT, MRI, US, PET, Fluoro), PACS (images auto-pushed at end of study)

**Duration:**
- X-ray: 5–10 min
- CT: 10–20 min
- MRI: 30–90 min
- PET/CT: 2–3 hours (includes tracer uptake time)
- Ultrasound: 20–45 min

**What can go wrong:**
- Patient motion → image blur → rescan sequences needed
- Wrong protocol selected → study has to be repeated
- Equipment downtime (MRI quench, CT tube failure)
- Contrast extravasation (IV infiltrates into tissue)
- Incidental finding spotted mid-scan → tech must decide whether to add sequences or notify radiologist

---

## Step 6 — Image Transmission & Worklist Routing

**What happens:**
- Completed images are automatically pushed from the modality to PACS
- The study appears on the radiologist's worklist in the RIS
- Routing rules assign the study to the correct radiologist based on: subspecialty, urgency, time of day, facility, and worklist load balancing
- STAT studies trigger alerts; routine studies queue in order

**Who is involved:** RIS/PACS systems (automated), radiology workflow coordinators

**Systems touched:** PACS (image archive), RIS (worklist management), DICOM protocol

**What can go wrong:**
- Routing failure → study sits unread on wrong worklist
- PACS connectivity issues → images not available on radiologist's workstation
- Prior studies not auto-loaded → radiologist reads without comparison imaging
- STAT flag not transmitted correctly → urgent study read as routine

---

## Step 7 — Radiology Interpretation

**What happens:**
- Radiologist opens the study on a high-resolution diagnostic workstation
- Pulls prior imaging for comparison (priors are critical — a "new" finding on current study may have been present for years)
- Reviews all images systematically
- AI/CAD tools may pre-flag abnormalities (e.g., Aidoc for PE/stroke, iCAD for mammography)
- Radiologist dictates findings using voice recognition software (Nuance PowerScribe dominates)
- Report structured as: **Clinical Indication → Technique → Comparison → Findings → Impression**

**Who is involved:** Radiologist (MD/DO), AI tools (augmentation), residents/fellows (in academic settings, reads are supervised)

**Systems touched:** PACS viewer (Sectra, Philips IntelliSpace, GE Centricity), voice recognition (PowerScribe), AI CAD overlay tools

**Turnaround time benchmarks:**
- STAT: < 1 hour
- Urgent: < 4 hours
- Routine: < 24 hours (varies by facility)

**What can go wrong:**
- Missing priors → can't distinguish new from old findings
- Overcrowded worklist → cognitive fatigue, missed findings
- AI tool flags false positive → radiologist spends time investigating non-finding
- AI tool misses finding → radiologist over-trusts automation
- Ambiguous finding requires clinical context not available in the order

---

## Step 8 — Report Finalization & Quality Review

**What happens:**
- Draft report is reviewed, edited, and finalized
- Some facilities use **peer review** (a second radiologist spot-checks reports for quality)
- Mammography requires a second radiologist read in high-volume screening programs
- Report is digitally signed and locked
- Addenda can be added post-signature if new information comes in (e.g., clinical context changes the impression)

**Who is involved:** Interpreting radiologist, peer reviewer (optional), RIS system

**Systems touched:** RIS reporting module, PowerScribe, peer review tools (PeerVue, RadPeer)

**What can go wrong:**
- Report signed with typo or wrong laterality (left vs. right errors are a known failure mode)
- Addendum not seen by ordering provider
- Critical finding documented in report but not communicated directly → delayed care

---

## Step 9 — Result Communication

**What happens:**
- Finalized report is transmitted to the ordering provider via EHR or secure message
- **Routine results:** Provider reads report at their own pace, follows up with patient
- **Critical / urgent results:** Radiologist is required to directly call the ordering provider — a Joint Commission mandate. The call must be documented.
- Patient-facing results: Many systems now push reports to patient portals (e.g., MyChart) — often with a 3–5 day hold to allow the provider to review first

**Who is involved:** Radiologist (for critical calls), ordering provider, patient

**Systems touched:** EHR in-basket, patient portal, phone (for critical result calls), documentation in RIS

**Critical finding examples:** Tension pneumothorax, aortic dissection, stroke on CT, pulmonary embolism, cord compression, intracranial hemorrhage

**What can go wrong:**
- Ordering provider unavailable (on-call coverage gaps)
- Critical result left in EHR in-basket, not seen promptly
- Patient receives result via portal before provider has reviewed it → patient alarm without clinical context
- Result delivered to wrong provider (care transitions, coverage handoffs)

---

## Step 10 — Clinical Review & Diagnostic Decision

**What happens:**
- Ordering provider reviews the radiology report
- Three paths:
  1. **Normal / negative** — reassure patient, no further imaging
  2. **Incidental finding** — unexpected abnormality unrelated to the reason for the scan; requires separate workup
  3. **Significant finding** — triggers next step (biopsy, specialist referral, additional imaging, treatment)
- Complex cases (oncology, rare disease) go to a **multidisciplinary team (MDT) / tumor board** — a weekly meeting of radiologists, oncologists, surgeons, pathologists who review cases together

**Who is involved:** Ordering provider, specialist, MDT team (if applicable), radiologist (often presents images at tumor board)

**Systems touched:** EHR, PACS (images displayed at MDT), tumor board scheduling tools

**What can go wrong:**
- Provider misinterprets report — medical literacy gap
- Incidental finding documented but not tracked → falls through the cracks (a major patient safety issue)
- Referral loop takes weeks → unnecessary delay
- MDT meeting only weekly → time-sensitive cases wait

---

## Step 11 — Follow-up Imaging / Rescan

**What happens:**
- Many findings require interval imaging to characterize (is it growing? is it benign?)
- Structured reporting systems define follow-up intervals:
  - **Lung-RADS** (pulmonary nodules on CT): categories 1–4 with specific rescan timelines
  - **BI-RADS** (breast imaging): categories 0–6, BI-RADS 3 = 6-month follow-up
  - **Li-RADS** (liver lesions in at-risk patients)
  - **TI-RADS** (thyroid nodules on ultrasound)
- The entire workflow (Steps 1–10) repeats for the follow-up study
- Radiologist compares directly to prior study; change in size/character drives next decision

**Who is involved:** Radiologist, ordering provider, patient

**Systems touched:** PACS (side-by-side comparison tools), RIS, EHR for tracking follow-up

**What can go wrong:**
- Follow-up recommendation buried in report, not tracked in EHR → patient lost to follow-up
- No system to auto-schedule or remind for follow-up imaging
- Patient declines recommended follow-up → undocumented gap in care
- Wrong prior study loaded for comparison → measurement error

---

## Step 12 — Tissue Sampling / Biopsy (If Indicated)

**What happens:**
- Imaging-guided biopsy performed by **Interventional Radiology (IR)** or by a specialist (e.g., surgical biopsy, endoscopic biopsy)
- IR biopsy types: CT-guided, ultrasound-guided, MRI-guided (less common, more complex)
- Tissue sent to pathology for histologic diagnosis
- Pathology result + imaging findings together establish the definitive diagnosis (DX)

**Who is involved:** Interventional radiologist, IR nurse/tech, pathologist, ordering provider

**Systems touched:** PACS (for pre-procedure planning), RIS (procedure order), pathology LIS (Laboratory Information System)

**What can go wrong:**
- Non-diagnostic biopsy (needle missed the lesion) → repeat biopsy needed
- Complication: bleeding, pneumothorax (post-lung biopsy), infection
- Pathology result discordant with imaging → requires reconciliation
- Results not communicated back to ordering provider promptly

---

## Step 13 — Treatment Planning

**What happens:**
- Imaging is central to treatment planning across all modalities:
  - **Surgery:** Pre-op imaging defines anatomy, margins, vascular supply
  - **Radiation therapy:** A dedicated **simulation CT** (a planning CT in treatment position) is acquired; dosimetry is mapped to the CT
  - **Medical oncology:** Baseline staging scan establishes disease extent for response assessment later
  - **Interventional treatment:** IR performs ablations (RFA, microwave, cryoablation), embolizations (blocking blood supply), and other minimally invasive procedures under image guidance

**Who is involved:** Radiation oncologist + medical physicist (radiation planning), surgeon, oncologist, IR radiologist

**Systems touched:** Radiation treatment planning software (Eclipse, RayStation), PACS, EHR, IR suite equipment

**What can go wrong:**
- Simulation CT done in wrong position → treatment plan invalid
- Organ-at-risk contours drawn incorrectly → radiation dose error
- IR procedure: targeting error, unintended vessel embolization

---

## Step 14 — Treatment Response Monitoring

**What happens:**
- Interval imaging is performed during and after treatment to assess response
- **RECIST criteria** (Response Evaluation Criteria in Solid Tumors): a standardized system for measuring tumor size on CT and categorizing response:
  - Complete Response (CR), Partial Response (PR), Stable Disease (SD), Progressive Disease (PD)
- Radiologist measures target lesions and compares to baseline
- Functional imaging (PET) used to assess metabolic response (e.g., Deauville criteria in lymphoma)
- Results drive treatment decisions: continue, switch regimen, escalate, or de-escalate

**Who is involved:** Radiologist, oncologist, MDT

**Systems touched:** PACS (with measurement tools), structured reporting tools, oncology EHR modules

**What can go wrong:**
- Measurement variability between radiologists (inter-reader variability is a known problem)
- Pseudo-progression (tumor appears larger due to immune infiltration, not true growth) — especially in immunotherapy
- Scan timing relative to treatment cycle not standardized → misleading results

---

## Step 15 — Remission & Long-term Surveillance

**What happens:**
- Patient enters remission or completes treatment
- Disease-specific surveillance schedules define imaging frequency (e.g., CT every 3 months for 2 years, then every 6 months, then annually)
- Surveillance transitions from active treatment monitoring to survivorship imaging
- Radiologist watches for: recurrence, new primaries, treatment-related complications (radiation fibrosis, chemotherapy-related organ damage)

**Who is involved:** Oncologist, radiologist, primary care (for late-stage survivorship), patient

**Systems touched:** EHR (for scheduling reminders), PACS, patient portal

**What can go wrong:**
- Surveillance schedule not programmed in EHR → patient falls off schedule
- Transition from oncology to PCP not coordinated → imaging responsibility unclear
- Late effects of treatment (e.g., radiation-induced lung fibrosis) attributed to new disease
- Patient fatigue → non-compliance with surveillance

---

## Step 16 — Incidental Findings Management (Parallel Track)

**What happens:**
- At any scan point in the workflow, the radiologist may identify an **incidental finding** — an unexpected abnormality unrelated to the reason for the scan
- Common incidentalomas: adrenal nodules, pulmonary nodules, renal cysts, liver lesions, thyroid nodules
- The radiologist recommends follow-up in the report
- This spawns an entirely separate workflow branch (back to Steps 2–11) for the incidental finding

**The problem:** There is no standardized, EHR-integrated system to track incidental finding follow-up recommendations. They often get lost.

**Who is involved:** Radiologist (flags it), ordering provider (responsible for acting on it), patient

**What can go wrong:**
- Recommendation made in report, never acted on — major liability exposure
- Patient has 3 different incidental findings across 3 different providers, none coordinating
- No alert fired if follow-up imaging is not scheduled within recommended window

---

## Key Takeaways

- **Radiology is not a moment — it's a loop.** The workflow is cyclical: scan → interpret → decide → rescan → compare → decide again. Products need to support the full arc, not just individual steps.
- **Communication is the #1 failure point.** At Steps 9, 10, and 16, information is handed off across systems and people. This is where findings get lost, results go unseen, and follow-ups fall through the cracks.
- **Prior imaging is everything.** Almost every interpretation step depends on comparison to prior studies. The ability to pull priors reliably — across facilities, across time — is foundational and often broken.
- **Authorization is a massive workflow tax.** Step 2 consumes enormous staff time, delays care by days, and is still largely fax-based. It's ripe for automation.
- **Incidental finding tracking is an unsolved problem.** There is no standardized, EHR-native system to close the loop on incidental finding follow-up. Patients fall through the cracks routinely.
- **Structured reporting (Lung-RADS, BI-RADS, etc.) creates actionable output.** Where structured categories exist, follow-up recommendations are more consistent and easier to act on. This pattern could be extended.
- **The radiologist never meets the patient.** In most outpatient workflows, the radiologist reads images cold — no patient interaction, minimal clinical context. Products that surface richer clinical context to the radiologist at read time have outsized impact on report quality.

---

## Recommended Next Steps

- **Map the hand-off points** (Steps 2, 9, 10, 11, 16) as a journey map — these are where your product can create the most value
- **Interview radiologists and ordering providers separately** — their mental models of the same workflow are surprisingly different
- **Audit how incidental findings are tracked** at a target institution — this is almost always manual and broken
- **Evaluate the prior-loading problem** — ask radiologists how often they read without the relevant prior study and what the workaround is
- **Look at structured reporting adoption** — facilities using Lung-RADS / BI-RADS have better follow-up rates; understand why and whether it can be generalized
- **Explore FHIR-based prior auth (CRD/DTR)** — CMS is mandating payer support for this by 2026; it will change Step 2 significantly

---

## Sources

- American College of Radiology (ACR) — Practice guidelines, Lung-RADS, BI-RADS, Li-RADS, TI-RADS documentation — acr.org
- RSNA (Radiological Society of North America) — Workflow and reporting standards — rsna.org
- The Joint Commission — Critical results communication requirements — jointcommission.org
- CMS / Medicare — RBRVS reimbursement, prior authorization FHIR mandate (CRD/DTR rule, 2024) — cms.gov
- RECIST Working Group — Response Evaluation Criteria in Solid Tumors v1.1 — recist.com
- Nuance / Microsoft — PowerScribe documentation (voice recognition + AI reporting) — nuance.com
- HIMSS — Radiology IT infrastructure standards (HL7, DICOM, FHIR) — himss.org
- Aidoc, Viz.ai — AI triage tools for PE/stroke detection (product documentation)
- AIM Specialty Health / eviCore — Prior authorization clinical criteria programs
