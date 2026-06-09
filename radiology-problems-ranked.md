# Top Radiology Problems in the US — Ranked by Impact

## Executive Summary

Radiology in the US is burdened by a set of well-documented, high-cost, high-harm problems that span clinical errors, operational failures, and systemic access gaps. This report ranks 18 problems across three equally weighted dimensions: monetary impact, number of patients affected, and impact on diagnosis. The top problems are not random — they cluster around four root causes: fragmented communication, lack of follow-up tracking, administrative overhead, and diagnostic error under cognitive load.

---

## Scoring Methodology

Each problem is scored 1–10 on three dimensions. Final rank = composite sum.

| Dimension | What it measures |
|---|---|
| **Monetary (M)** | Direct costs, malpractice liability, lost revenue, admin waste |
| **Patients (P)** | Volume of US patients affected annually |
| **Diagnosis (D)** | Severity of downstream diagnostic harm — missed, delayed, or wrong diagnosis |

---

## Ranked Problem List

---

### #1 — Missed / Delayed Breast Cancer (False Negative Mammography)
**M: 9 | P: 8 | D: 10 | Total: 27**

**What it is:** The radiologist fails to detect a breast malignancy on screening or diagnostic mammography.

- **Monetary:** Missed breast cancer is the single most litigated case in all of radiology and the #1 malpractice claim by dollar value. The average jury verdict exceeds $1M. Industry-wide, breast imaging malpractice settlements exceed $2.8B/year.
- **Patients:** ~40M screening mammograms performed annually in the US. False negative rate is 10–15% (1 in 7 to 10 cancers missed per cycle). Dense breast tissue — present in ~40% of women — significantly increases miss rate; most states now require density notification.
- **Diagnosis:** A missed mammogram means cancer is diagnosed at a later stage. Stage II → Stage IV survival rates drop from ~90% to ~28% for breast cancer. Time from missed screen to symptomatic presentation averages 14–24 months.

**Root cause:** Dense breast tissue limits X-ray sensitivity; single-radiologist reads in high-volume screening; fatigue; lack of consistent AI-assisted detection.

---

### #2 — Prior Authorization Burden
**M: 9 | P: 10 | D: 7 | Total: 26**

**What it is:** Payers require advance approval before imaging can be performed. Radiology is the most-authorized specialty in US medicine.

- **Monetary:** AMA estimates prior auth costs US physicians $13B/year in administrative overhead across all specialties — radiology carries a disproportionate share. A single radiology practice with 10 physicians can spend $800K–$1M/year on auth staff. Denial rates for imaging average 12–15% nationally; appeals add further cost.
- **Patients:** ~250M outpatient imaging studies/year in the US. A significant fraction (estimated 30–50% of non-emergency outpatient studies) require prior auth. AMA survey: 94% of physicians report auth causes care delays; 25% report a patient experienced a serious adverse event due to auth delay.
- **Diagnosis:** Routine studies delayed 3–14 days on average; complex studies (PET, MRI for rare conditions) can be delayed weeks. Some patients never complete the study after a denial, particularly those with Medicaid or high-deductible plans.

**Root cause:** Fee-for-service incentives → payers use auth as utilization management. Process is largely manual (fax-based), despite CMS mandating FHIR-based CRD/DTR standards by 2026.

---

### #3 — Imaging Overutilization
**M: 10 | P: 9 | D: 5 | Total: 24**

**What it is:** Imaging is ordered when it is not clinically appropriate or adds no decision-useful information.

- **Monetary:** RAND Corporation estimates $40–80B/year in unnecessary imaging in the US. CMS and the ACR estimate 20–30% of all imaging studies are inappropriate by ACR Appropriateness Criteria. That's ~60–90M unnecessary studies/year.
- **Patients:** Almost every imaging patient is affected — either directly (unnecessary radiation, unnecessary contrast exposure, anxiety) or indirectly (clogged scheduling queues delay access for patients who need imaging).
- **Diagnosis:** Overutilization creates false-positive findings → unnecessary follow-up studies, biopsies, and procedures. Each unnecessary test adds noise to the diagnostic process rather than signal. The US has one of the highest CT utilization rates in the world (relative to health outcomes).

**Root cause:** Defensive medicine; referring providers unfamiliar with ACR Appropriateness Criteria; fee-for-service incentives; lack of clinical decision support at time of ordering.

---

### #4 — Incidental Finding Follow-up Failure
**M: 7 | P: 8 | D: 9 | Total: 24**

**What it is:** A radiologist identifies an unexpected abnormality (unrelated to the reason for the scan) and recommends follow-up — which never happens.

- **Monetary:** No payer tracks this systematically, but malpractice liability from missed incidental malignancies (particularly adrenal, lung, renal, and liver) is substantial. A missed incidental lung nodule that develops into Stage III cancer routinely generates $500K–$2M+ in settlements.
- **Patients:** ~30% of abdominal CTs contain an incidental finding. With ~70M CT scans/year, that is roughly 20M+ incidental findings annually. Studies consistently show 20–40% of recommended follow-up is never completed.
- **Diagnosis:** Direct: cancers are diagnosed at later stages because the follow-up scan that would catch progression is never done. Common missed incidentalomas: adrenal adenoma vs. malignancy, pulmonary nodules, renal cell carcinoma, pancreatic cysts.

**Root cause:** No EHR-native tracking system for follow-up imaging recommendations. The recommendation lives in a radiology report — it is the referring physician's responsibility to act on it, but there is no alert, no reminder, and no accountability system.

---

### #5 — Missed Pulmonary Embolism (PE) on CT-PA
**M: 7 | P: 7 | D: 10 | Total: 24**

**What it is:** A pulmonary embolism is not identified on CT pulmonary angiography (CT-PA), the definitive diagnostic study.

- **Monetary:** PE is a top-5 radiology malpractice category. Average settlement for missed PE with poor outcome: $700K–$1.5M. PE is responsible for 100,000+ deaths/year in the US — missed diagnosis accounts for a significant portion.
- **Patients:** ~900,000 PE cases diagnosed annually. Studies estimate a significant miss rate, particularly for subsegmental (small) PEs. False negative rates on CT-PA reported at 2–7% in high-volume studies.
- **Diagnosis:** Untreated massive PE has a 30%+ mortality rate. Treated PE: 2–8%. A missed PE = delayed anticoagulation → clot extension, hemodynamic collapse, right heart failure. Time-critical.

**Root cause:** Subsegmental PEs are subtle and easily overlooked on busy overnight reads; motion artifact degrades image quality; AI tools (Aidoc, Viz.ai) are improving detection rates but have their own false positive burden.

---

### #6 — Missed Acute Stroke on Non-Contrast CT
**M: 7 | P: 6 | D: 10 | Total: 23**

**What it is:** Early ischemic stroke changes are not identified on the initial CT scan in the emergency setting.

- **Monetary:** Stroke is the #2 malpractice claim in emergency radiology. Average verdict for missed stroke with permanent disability: $1–4M. 800,000 strokes/year × missed fraction × treatment cost differential = billions in downstream costs.
- **Patients:** ~800,000 strokes/year in the US; ~87% ischemic. Early changes (subtle cortical edema, hyperdense MCA sign) are missed on non-contrast CT in ~40–50% of cases in the first 3–6 hours.
- **Diagnosis:** "Time is brain" — every 15-minute delay = ~2 million neurons lost. tPA window is 4.5 hours; thrombectomy window is 6–24 hours depending on imaging criteria. A missed CT scan = patient is not triaged for intervention.

**Root cause:** Early ischemic changes are subtle; ED CT reads are often done by general radiologists, not neuroradiologists; overnight reads under fatigue. MRI (DWI) is far more sensitive for early stroke but is not always immediately available in the ED.

---

### #7 — Critical Result Communication Failure
**M: 7 | P: 7 | D: 9 | Total: 23**

**What it is:** A radiologist identifies a critical or urgent finding but it is not communicated to the treating team in time to affect care.

- **Monetary:** Radiology is the #1 or #2 specialty by total malpractice claims in the US. A significant fraction of cases involve not the missed finding, but the failure to communicate a correctly identified finding promptly.
- **Patients:** Studies estimate 2–8% of all imaging studies contain findings requiring urgent or emergent communication. At ~300M total studies/year, that is 6–24M studies with time-sensitive findings annually.
- **Diagnosis:** Critical findings include: intracranial hemorrhage, aortic dissection, tension pneumothorax, cord compression, testicular torsion. Delay in acting on these findings directly causes death or permanent disability.

**Root cause:** Radiologist documents the finding in the report but relies on the ordering provider to see it; phone call not made, or made to unavailable covering provider with no escalation. No automated alert system tied to PACS/EHR for critical findings.

---

### #8 — Missing Prior Studies / Imaging Data Fragmentation
**M: 8 | P: 7 | D: 8 | Total: 23**

**What it is:** A radiologist reads a study without access to relevant prior imaging from other health systems, creating an incomplete diagnostic picture.

- **Monetary:** When priors are unavailable, the imaging study is often repeated — ~$10B+/year in redundant imaging costs attributable to data fragmentation. Repeat CT = additional radiation, additional cost, additional scheduling time.
- **Patients:** ~60% of US patients have received imaging at more than one health system. PACS systems are institution-specific; cross-system image sharing is fragmented (CDs, physical media, DICOM web still immature in practice).
- **Diagnosis:** A nodule that has been stable for 5 years is benign; the same nodule seen without a prior looks suspicious and triggers a cascade of follow-up. Reading without priors is a primary contributor to both over-workup and missed progression.

**Root cause:** PACS architecture is siloed by institution; no national health imaging exchange (despite efforts from CommonWell, Carequality, TEFCA). Patients carry CDs; CDs are often unread. DICOM image sharing via FHIR is emerging but not standardized.

---

### #9 — Imaging Access Disparities (Rural & Underserved)
**M: 6 | P: 8 | D: 9 | Total: 23**

**What it is:** Patients in rural, low-income, or underinsured populations face significant barriers to accessing imaging — resulting in later-stage diagnoses.

- **Monetary:** Rural hospital closures have accelerated (200+ since 2005); many close their imaging departments first. The cost is borne downstream: late-stage cancer treatments cost 3–5x more than early-stage. Late-diagnosis cancers in rural populations cost Medicare an estimated $4B+/year in excess treatment costs.
- **Patients:** ~60M Americans live in rural areas; ~30M are uninsured or underinsured. Rural patients travel an average of 30–50 miles to access MRI. Medicaid patients face prior auth denial rates significantly higher than commercial insurance patients.
- **Diagnosis:** Rural patients present with more advanced cancer stages at diagnosis across every cancer type. Cervical, colorectal, lung cancer — all show later staging in rural populations. Disparities are compounded for racial minorities: Black women are 41% more likely to die from breast cancer than white women, partly due to imaging access and follow-up gaps.

**Root cause:** Reimbursement rates insufficient for rural facilities to maintain imaging equipment; malpractice risk without subspecialty support; teleradiology partially addresses reads but not scanner access.

---

### #10 — Radiology Workforce Shortage & Burnout
**M: 7 | P: 8 | D: 7 | Total: 22**

**What it is:** The US has a growing shortage of radiologists relative to imaging volume, driving burnout, TAT delays, and diagnostic error.

- **Monetary:** The gap between radiology supply and demand is projected to be 30,000 radiologist-FTEs by 2033 (Harvey L. Neiman Health Policy Institute). Practices are paying $200–400/hour for locum and teleradiology coverage. Revenue loss from delayed reads is difficult to measure but structurally significant.
- **Patients:** ~16,000 active radiologists currently; imaging volume is growing 3–5% annually; radiologist supply growing ~1%. Every patient waiting for a read is affected — but the effect is diffuse.
- **Diagnosis:** Burnout is directly correlated with diagnostic error rate. Studies show radiologist error rates increase after 4–6 hours of continuous reading. Overnight reads are highest-risk for missed findings. High-volume practices report reads-per-day exceeding evidence-based safe thresholds.

**Root cause:** Residency training programs are capacity-constrained (GME slots); subspecialization adds training years; early retirement trend post-COVID.

---

### #11 — Radiation Overexposure from CT
**M: 7 | P: 9 | D: 6 | Total: 22**

**What it is:** Patients receive excessive cumulative radiation dose from CT scans — both from individually high-dose studies and from repeat/cumulative studies over time.

- **Monetary:** The National Cancer Institute estimates radiation from CT scans may account for ~1.5–2% of all US cancer cases — roughly 30,000–60,000 cancers/year. Treatment costs for radiation-induced cancers are substantial long-term liabilities.
- **Patients:** ~80M CT scans performed annually in the US. Some patients receive dozens of CTs over a lifetime (trauma patients, cancer surveillance patients). A single CT abdomen/pelvis = ~10–15 mSv (equivalent to 500 chest X-rays).
- **Diagnosis:** Indirect harm: radiation-induced cancer is a downstream diagnostic event. More immediately, radiation risk creates clinical reluctance to image certain populations (children, pregnant patients) — sometimes resulting in underimaging and delayed diagnosis.

**Root cause:** No national radiation dose registry (some state-level programs exist); dose varies 10-fold between facilities for the same study; dose reduction techniques (iterative reconstruction, AI denoising) not universally implemented.

---

### #12 — Structured Follow-up Non-Compliance (BI-RADS, Lung-RADS, Li-RADS)
**M: 6 | P: 7 | D: 8 | Total: 21**

**What it is:** Patients with structured follow-up recommendations (e.g., BI-RADS 3 → 6-month mammogram; Lung-RADS 3 → 6-month CT) do not return for their follow-up scan.

- **Monetary:** Non-compliance represents both lost revenue and significant liability. Approximately 20–40% of BI-RADS 3 patients do not complete their 6-month follow-up mammogram. Each missed follow-up that results in a missed cancer = significant malpractice exposure.
- **Patients:** ~1–2M women/year receive BI-RADS 3 assessments. Lung-RADS 3+ findings on low-dose CT lung cancer screening (LDCT): ~10% of screens. Li-RADS, TI-RADS, PI-RADS all add to the denominator.
- **Diagnosis:** BI-RADS 3 → 6-month follow-up is designed to catch the ~2% of cases that are malignant. Lung-RADS 3–4 are specifically for suspicious pulmonary nodules. Non-compliance means the system designed to catch early malignancy fails at its final step.

**Root cause:** Same root cause as incidental findings: no integrated follow-up tracking system in EHR. Patient responsibility is placed on the individual without systematic reminders or accountability.

---

### #13 — Payer Denials & Appeals Process
**M: 8 | P: 7 | D: 6 | Total: 21**

**What it is:** Insurers deny coverage for imaging studies (post-service), requiring practices to appeal — consuming resources and sometimes resulting in permanent non-payment.

- **Monetary:** The AMA estimates $54B/year in wasted physician time on claim denials and appeals across medicine. Radiology practices report denial rates of 5–15% for imaging studies, with appeal rates of ~40%. Even when overturned, the cost of staff time to appeal approaches the value of the claim.
- **Patients:** Denial affects patients when they are billed the full amount after a denial is not appealed, or when denials discourage future ordering (chilling effect on care).
- **Diagnosis:** Denials primarily create financial burden rather than direct diagnostic harm, but they do create a chilling effect: providers in under-resourced settings learn not to order studies that frequently get denied.

**Root cause:** Payer business incentives aligned with denial; complex, non-standardized appeal processes; lack of transparency in coverage criteria.

---

### #14 — Report Turnaround Time (TAT) Failures
**M: 6 | P: 8 | D: 6 | Total: 20**

**What it is:** Imaging reports are not finalized within clinically appropriate timeframes — routine studies in >24 hours, urgent studies in >4 hours, STAT studies in >1 hour.

- **Monetary:** Hospital contracts with radiology groups include TAT SLAs with financial penalties. ED throughput is directly tied to radiology TAT — delayed reads = prolonged ED boarding = reduced bed availability.
- **Patients:** All imaging patients are affected to some degree, but the most acute harm is in the ED: ~140M ED visits/year in the US; imaging is ordered in ~50% of visits. Every hour of imaging delay = additional hours in the ED.
- **Diagnosis:** Delays in reporting slow clinical decision-making. In time-sensitive conditions (appendicitis, bowel obstruction, aortic pathology), a 2–4 hour delay in a CT report materially affects patient outcomes.

**Root cause:** Workforce shortage; uneven worklist distribution; overnight/weekend coverage gaps; lack of real-time workload monitoring tools.

---

### #15 — EHR–RIS–PACS Integration Failures
**M: 6 | P: 8 | D: 6 | Total: 20**

**What it is:** Breakdowns in the interfaces between the EHR (clinical record), RIS (radiology workflow), and PACS (image archive) cause data loss, routing errors, and workflow failures.

- **Monetary:** IT remediation costs; repeat imaging from failed studies; staff time lost to manual workarounds. Epic/Cerner + PACS integration projects commonly run $2–10M+ for large health systems.
- **Patients:** Integration failures are invisible to patients but affect nearly every imaging workflow: missing orders, unrouted studies, wrong patient merges, failed result delivery.
- **Diagnosis:** Wrong patient ID on a study = wrong patient treated. HL7 interface failures = study not routed to radiologist. Failed DICOM transfer = radiologist reads without images. These are individually rare but collectively significant given imaging volume.

**Root cause:** HL7 v2 is still the dominant integration standard — a 35-year-old protocol with no native error handling. Migration to FHIR is slow. Most health systems have hundreds of custom interface engines.

---

### #16 — Teleradiology Quality Gaps
**M: 5 | P: 6 | D: 7 | Total: 18**

**What it is:** Teleradiologists (remote readers, often used for overnight and weekend coverage) provide lower-quality interpretations due to lack of clinical context, patient history, and institutional familiarity.

- **Monetary:** Teleradiology reduces labor costs but increases malpractice risk. Preliminary reads that are significantly altered on next-day subspecialty review are a documented quality issue.
- **Patients:** ~30% of all US radiology reads are done by teleradiologists. Rural hospitals, small community hospitals, and overnight ED coverage are predominantly teleradiology.
- **Diagnosis:** Studies show teleradiology discordance rates with on-site subspecialists of 3–8% for complex studies. For neuroradiology overnight reads, discordance rates for actionable findings can exceed 10%.

**Root cause:** Teleradiologists read without clinical context, without prior images (often), and without the ability to directly examine the patient. Incentive is speed (volume-based pay).

---

### #17 — Contrast-Related Adverse Events
**M: 5 | P: 7 | D: 5 | Total: 17**

**What it is:** Patients experience adverse reactions to iodinated contrast (CT) or gadolinium-based contrast agents (MRI) — ranging from mild allergic reactions to acute kidney injury or nephrogenic systemic fibrosis.

- **Monetary:** Severe reactions requiring treatment: ~$5K–$50K in management costs per event. Contrast-induced AKI (CI-AKI) is the #3 cause of hospital-acquired renal failure. GBCAs have been linked to gadolinium retention (long-term health implications still being studied).
- **Patients:** ~80M contrast studies/year. Severe reactions: 0.1–0.2% = 80,000–160,000 severe reactions/year. CI-AKI affects ~1–7% of patients with pre-existing renal disease who receive iodinated contrast.
- **Diagnosis:** When patients cannot tolerate contrast, studies must be performed without contrast or deferred — reducing diagnostic yield for vascular, hepatic, and oncologic studies.

**Root cause:** Inconsistent pre-screening for eGFR and allergy history; contrast administered in settings without crash cart access; pre-medication protocols not consistently applied.

---

### #18 — AI/CAD Alert Fatigue & Over-Reliance
**M: 4 | P: 5 | D: 7 | Total: 16**

**What it is:** AI tools used to flag abnormal findings generate enough false positives that radiologists begin to dismiss alerts — or conversely, over-trust AI and miss findings the AI did not flag.

- **Monetary:** Emerging cost: malpractice liability from both over-reliance (AI missed it, radiologist deferred) and under-reliance (AI flagged it, radiologist dismissed it). Still being litigated.
- **Patients:** Growing rapidly as AI tools are deployed at scale. Aidoc, Viz.ai, Nuance AI, and others are active in hundreds of hospitals.
- **Diagnosis:** False positive rates for current AI tools range 5–20% depending on modality and condition. False negative rates are lower but not zero. The critical issue: when radiologists over-trust AI, their own search pattern degrades — they stop looking carefully at areas the AI did not flag.

**Root cause:** AI tools optimized for sensitivity (not specificity) to avoid regulatory liability for missed findings. Alert calibration to each practice's population is rarely done.

---

## Summary Scorecard

| Rank | Problem | M | P | D | Total |
|---|---|---|---|---|---|
| 1 | Missed Breast Cancer (False Negative Mammography) | 9 | 8 | 10 | **27** |
| 2 | Prior Authorization Burden | 9 | 10 | 7 | **26** |
| 3 | Imaging Overutilization | 10 | 9 | 5 | **24** |
| 3 | Incidental Finding Follow-up Failure | 7 | 8 | 9 | **24** |
| 3 | Missed Pulmonary Embolism | 7 | 7 | 10 | **24** |
| 6 | Missed Acute Stroke on CT | 7 | 6 | 10 | **23** |
| 6 | Critical Result Communication Failure | 7 | 7 | 9 | **23** |
| 6 | Missing Priors / Data Fragmentation | 8 | 7 | 8 | **23** |
| 6 | Imaging Access Disparities | 6 | 8 | 9 | **23** |
| 10 | Radiology Workforce Shortage & Burnout | 7 | 8 | 7 | **22** |
| 10 | Radiation Overexposure from CT | 7 | 9 | 6 | **22** |
| 12 | Structured Follow-up Non-compliance | 6 | 7 | 8 | **21** |
| 12 | Payer Denials & Appeals | 8 | 7 | 6 | **21** |
| 14 | Report Turnaround Time Failures | 6 | 8 | 6 | **20** |
| 14 | EHR–RIS–PACS Integration Failures | 6 | 8 | 6 | **20** |
| 16 | Teleradiology Quality Gaps | 5 | 6 | 7 | **18** |
| 17 | Contrast-Related Adverse Events | 5 | 7 | 5 | **17** |
| 18 | AI/CAD Alert Fatigue & Over-Reliance | 4 | 5 | 7 | **16** |

---

## Key Takeaways

- **The #1 clinical problem is missed breast cancer** — highest diagnosis harm score, highest malpractice dollar value, and one of the highest patient volumes of any single diagnostic failure in all of medicine.
- **The #1 operational problem is prior authorization** — it affects virtually every non-emergency imaging patient in the US, costs the system billions, and delays diagnoses by days to weeks with no clinical benefit.
- **Problems #4, #12, and #7 share the same root cause:** there is no EHR-native system to track radiology follow-up recommendations. Incidental findings, structured follow-up (BI-RADS/Lung-RADS), and critical results all fall through the same crack.
- **Missing prior imaging (#8) is a force multiplier** — it makes nearly every other diagnostic problem worse, because interpretation without comparison is categorically less accurate.
- **AI is creating a new class of problem (#18)** even as it solves some of the old ones — alert fatigue and over-reliance are emerging failure modes that the industry has not yet resolved.
- **Access disparities (#9) are the most under-discussed problem** relative to their scale — 60M+ Americans are systematically underserved by the imaging system, with measurable mortality consequences.

---

## Recommended Next Steps

- **For product strategy:** Problems #4, #7, and #12 (follow-up tracking) represent the clearest whitespace — high harm, high volume, and no dominant solution exists today
- **For user research:** Interview radiologists specifically about prior imaging access (problem #8) — it is the most universally cited friction point in day-to-day practice
- **For competitive analysis:** Map existing solutions against problems #1–5; understand where incumbents (Epic, Nuance, Aidoc, Viz.ai) play and where they don't
- **For prioritization:** Problems with high D scores (missed PE, stroke, breast cancer) create the most clinical urgency; problems with high M+P scores (overutilization, prior auth) create the most market size
- **For regulatory context:** CMS prior auth FHIR mandate (2026) will reshape problem #2 — watch for winners and losers in that transition
- **For design research:** Shadow a radiologist on a busy read day — observe how priors are (or aren't) loaded, how critical results are communicated, and how worklist routing actually behaves

---

## Sources

- American Medical Association (AMA) — 2023 Prior Authorization Survey; $13B admin cost estimate — ama-assn.org
- Harvey L. Neiman Health Policy Institute — Radiologist workforce projections — neimanhpi.org
- ACR (American College of Radiology) — Appropriateness Criteria, Lung-RADS, BI-RADS, Li-RADS — acr.org
- RAND Corporation — Unnecessary imaging cost estimates — rand.org
- National Cancer Institute (NCI) — CT radiation and cancer risk estimates — cancer.gov
- JAMA Internal Medicine — Overutilization and inappropriate imaging studies (multiple)
- Journal of the American College of Radiology (JACR) — Miss rates, malpractice, teleradiology discordance
- The Joint Commission — Critical result communication standards — jointcommission.org
- Society of Interventional Radiology (SIR) — IR procedure complication data — sirweb.org
- Agency for Healthcare Research and Quality (AHRQ) — Diagnostic error and patient safety data — ahrq.gov
- CMS — Prior authorization FHIR mandate (CRD/DTR rule, 2024) — cms.gov
- Aidoc, Viz.ai — Published clinical validation studies (PE detection, stroke triage)
- CommonWell / Carequality / TEFCA — Health data interoperability frameworks
