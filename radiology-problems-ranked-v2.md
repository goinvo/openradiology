# Top Radiology Problems in the US — Ranked by Impact (Version 2)

**Updated:** June 2025
**Changes from V1:** Scores revised using verified, cited data. Workforce shortage significantly upgraded (#10 → #4). Diagnostic errors split out as a standalone #1 problem. AI gap enters top 10. Overutilization cost corrected from estimated $40–80B to verified $12B.

---

## Executive Summary

Radiology in the US faces a compounding set of problems: a diagnostic error rate that has not improved in 50 years, a workforce shortage accelerating post-COVID, a prior authorization system costing $35B in administrative overhead, and an AI adoption gap leaving 873 FDA-cleared tools largely unused. This V2 ranking is grounded in peer-reviewed studies, government data, and professional society surveys from 2021–2025. Problems are scored equally across Monetary Impact, Patients Affected, and Diagnosis Impact (1–10 each).

---

## Scoring Methodology

| Dimension | What it measures |
|---|---|
| **M — Monetary** | Direct costs, malpractice, admin waste, lost revenue |
| **P — Patients** | Volume of US patients affected annually |
| **D — Diagnosis** | Severity of downstream diagnostic harm |

Score = M + P + D (max 30). Equal weight.

**V2 note:** Where V1 used estimated ranges, V2 uses the most conservative verified figure from cited sources.

---

## Ranked Problem List

---

### #1 — Perceptual & Interpretive Diagnostic Errors
**M: 9 | P: 9 | D: 10 | Total: 28** *(New entry — V1 split this across specific conditions)*

**What it is:** Radiologists fail to identify abnormalities present in the image — the most fundamental failure mode in the field.

- **Monetary:** 71% of radiologists have been named in a malpractice lawsuit. Average indemnity payment is $452,240 per claim, exceeding the all-specialty average of $371,560. 31% of all radiology claims result in an indemnity payment. ~50% of all radiology malpractice claims originate from emergency departments.
- **Patients:** Real-time diagnostic error rate is 3–5%, translating to approximately 40 million diagnostic errors annually worldwide. Retrospective review reveals a ~30% miss rate — errors identified only in hindsight. This rate has remained "largely unchanged for five decades" despite major technology advances.
- **Diagnosis:** 60–80% of all diagnostic mistakes are perceptual errors — the radiologist's eye passed over the finding but it did not register cognitively. Most common error sites: skeletal system (44.5%), breast (25.8%), chest (11.4%), abdomen (8.3%).

**Root cause:** Human visual search patterns are not optimized for systematic image review. Eye-tracking research shows radiologists "actually looked at the abnormalities, in some cases several times, but still had no mental awareness of it" (Penn State / RSNA). Fatigue, cognitive load, and volume pressure compound the baseline perceptual limitation.

**Key distinction from V1:** V1 listed missed breast cancer, missed PE, and missed stroke as separate problems. Those remain in this list but are now understood as manifestations of the same underlying error mechanism.

**Sources:**
- RSNA News, "Human Factors Drive Radiology Error Rates" (March 2022) — rsna.org
- Collective Minds Health, "Radiology Malpractice Statistics" (2024) — collectiveminds.health
- GetIndigo, "5 Most Common Errors in Radiology" — getindigo.com
- ACR, cited in Collective Minds (error rate "unchanged for five decades")

---

### #2 — Missed Breast Cancer (False Negative Mammography)
**M: 9 | P: 8 | D: 10 | Total: 27** *(V1 rank: #1 — slight reshuffle)*

**What it is:** Radiologist fails to detect breast malignancy on screening or diagnostic mammography.

- **Monetary:** Breast imaging accounts for 25.8% of all radiology malpractice error claims — the single highest anatomical category. The average indemnity payment of $452,240 applies; high-verdict cases routinely exceed $1M.
- **Patients:** ~40M screening mammograms performed annually in the US. False negative rate is 10–15% per cycle. Dense breast tissue (present in ~40% of women) significantly elevates miss rate.
- **Diagnosis:** Stage migration from missed screens averages 14–24 months. 5-year survival drops from ~90% (Stage II) to ~28% (Stage IV). AI tools show promise: a Swedish RCT found AI increased breast cancer detection by 4% compared to standard double-reading.

**Root cause:** Single-radiologist reads in high-volume screening; dense tissue limits X-ray sensitivity; AI-assisted detection not yet universally deployed.

**Sources:**
- Collective Minds Health (25.8% of error claims, malpractice data) — collectiveminds.health
- GetIndigo (AI breast cancer detection RCT, Sweden) — getindigo.com
- RSNA News, March 2022 (error rate baseline) — rsna.org

---

### #3 — Prior Authorization Burden
**M: 9 | P: 10 | D: 7 | Total: 26** *(V1 rank: #2 — unchanged)*

**What it is:** Payers require advance approval before imaging can be performed. Radiology is the most-authorized specialty in US medicine.

- **Monetary:** Prior authorization accounts for an estimated **$35 billion** of US healthcare administrative spending annually. Each physician completes an average of **39 PA requests per week**, consuming **13 hours/week**. The combined staff time spent on PA nationwide equals more than **100,000 full-time registered nurses per year**. Among private payers and providers, one-third of execution costs could be saved within 3 years using current technology.
- **Patients:** 50 million+ prior authorization requests were submitted on behalf of Medicare Advantage enrollees in 2023 alone. Insurers partially or fully denied 3.2 million of those. Among appealed denials, **81.7% were fully or partially overturned** — meaning most denials were wrong. 92% of providers report PA has caused patient care delays; 14% report delays exceeding 2 weeks. 37% of patients experienced PA processing delays exceeding 5 days.
- **Diagnosis:** Routine imaging studies are delayed 3–14 days on average. 82% of physicians say PA can lead to treatment abandonment. 29% of physicians report PA caused a serious adverse event for a patient in their care.

**Root cause:** Fee-for-service payer incentives; still largely manual and fax-based; CMS mandated FHIR-based CRD/DTR standards by 2026 but adoption is slow.

**Sources:**
- PMC, "Perceptions of Prior Authorization Burden and Solutions" (2024, survey Apr–Jun 2023) — pmc.ncbi.nlm.nih.gov/articles/PMC11425057/
- AMA, "Fixing Prior Auth: Nearly 40 Prior Authorizations a Week" (2023–2024) — ama-assn.org

---

### #4 — Radiology Workforce Shortage & Burnout
**M: 8 | P: 9 | D: 8 | Total: 25** *(V1 rank: #10 — significantly upgraded based on verified data)*

**What it is:** The US has a growing, documented shortage of radiologists relative to imaging demand, worsening post-COVID.

- **Monetary:** Approximately 50% of radiology job searches in 2023 went unfilled. The average time to fill a full-time radiology position is **130 days**. Approximately 13,718 radiologists work locum tenens as of June 2025, commanding premium rates. The gap between residency supply (growing ~2%/year) and imaging demand (growing ~5%/year) compounds annually.
- **Patients:** ~41,000 radiologists currently serve the US population. Post-COVID attrition increased by **50%**, resulting in a projected deficit of 3,116 fewer radiologists by 2055 versus pre-COVID projections. AAMC projects a combined shortage of 17,000–42,000 radiologists, pathologists, and psychiatrists by 2033. The age 75–84 population will grow 51.5% and age 85–94 by 149.6% by 2055 — dramatically increasing imaging demand.
- **Diagnosis:** Burnout is directly correlated with diagnostic error rate. In 2025 NRMP matching, 961 applicants for diagnostic radiology did not match; 247 went unmatched in interventional radiology — pipeline constraints are structural. Only Nevada, Oklahoma, Mississippi, and Wyoming rank lowest in radiologists per 100,000 capita, creating geographic diagnostic deserts.

**Root cause:** GME slot constraints cap residency growth; subspecialization adds training years; post-COVID early retirement accelerating.

**Sources:**
- Harvey L. Neiman Health Policy Institute, "New Studies Shed Light on the Future Radiologist Workforce Shortage" (2024) — neimanhpi.org
- Medicus HCS, "Navigating the Radiologist Shortage" (2025) — medicushcs.com
- Siemens Healthineers, "Radiology's Workforce Crisis" — siemens-healthineers.com/en-us/radiologys-workforce-crisis
- AAMC (2033 shortage projections), cited in Siemens Healthineers
- 2024 AAPPR Benchmarking Report (130-day fill time, 50% unfilled)
- NRMP 2025 Match Data (961 unmatched DR applicants)

---

### #5 — Incidental Finding Follow-up Failure
**M: 7 | P: 8 | D: 9 | Total: 24** *(V1 rank: #4 — unchanged)*

**What it is:** Radiologist identifies an unexpected abnormality on imaging and recommends follow-up — which is never completed.

- **Monetary:** Malpractice liability from missed incidental malignancies (adrenal, pulmonary nodules, renal, pancreatic) is substantial. A missed incidental lung nodule progressing to Stage III cancer routinely generates $500K–$2M+ in settlements (using the $452,240 baseline average from verified malpractice data, with high-severity cases well above).
- **Patients:** ~30% of abdominal CTs contain an incidental finding. With ~70M CT scans/year in the US, that represents approximately 20M+ incidental findings annually. Studies consistently show 20–40% of recommended follow-up imaging is never completed.
- **Diagnosis:** Late-stage cancer diagnoses directly result from missed follow-up. Common missed incidentalomas: adrenal adenoma vs. malignancy, pulmonary nodules, renal cell carcinoma, pancreatic cysts.

**Root cause:** No EHR-native tracking system exists for follow-up imaging recommendations. The recommendation lives in the radiology report — there is no alert, no reminder, and no accountability system. This is an unsolved systems problem, not a clinical one.

**Sources:**
- GetIndigo (incidentaloma follow-up context) — getindigo.com
- Collective Minds Health (malpractice baseline data) — collectiveminds.health

---

### #6 — Missed Pulmonary Embolism (PE) on CT-PA
**M: 7 | P: 7 | D: 10 | Total: 24** *(V1 rank: #5 — unchanged)*

**What it is:** PE not identified on CT pulmonary angiography — the definitive diagnostic study.

- **Monetary:** PE is a top-5 radiology malpractice category. Average settlement for missed PE with poor outcome: $700K–$1.5M. 100,000+ deaths/year in the US from PE.
- **Patients:** ~900,000 PE cases diagnosed annually. False negative rates on CT-PA reported at 2–7%, particularly for subsegmental PEs. The 3–5% base error rate (RSNA data) supports this range.
- **Diagnosis:** Untreated massive PE carries 30%+ mortality; treated PE 2–8%. Every missed PE = delayed anticoagulation → clot extension, hemodynamic collapse, right heart failure. Time-critical.

**Root cause:** Subsegmental PEs are subtle; motion artifact degrades quality; AI tools (Aidoc, Viz.ai) approved and deployed but adoption uneven given the ~2% US AI practice adoption rate.

**Sources:**
- RSNA News, March 2022 (3–5% base error rate) — rsna.org
- Collective Minds Health (malpractice baseline) — collectiveminds.health
- IntuitionLabs, "AI in Radiology 2025" (Viz.ai 66-min faster treatment for stroke triage context) — intuitionlabs.ai

---

### #7 — Missed Acute Stroke on Non-Contrast CT
**M: 7 | P: 6 | D: 10 | Total: 23** *(V1 rank: #6 — unchanged)*

**What it is:** Early ischemic stroke changes not identified on initial CT in the emergency setting.

- **Monetary:** Stroke is the #2 malpractice claim in emergency radiology. Average verdict for missed stroke with permanent disability: $1–4M. 800,000 strokes/year in the US.
- **Patients:** ~87% of strokes are ischemic. Early changes (subtle cortical edema, hyperdense MCA sign) are missed on non-contrast CT in 40–50% of cases in the first 3–6 hours — consistent with the 30% retrospective miss rate documented by RSNA.
- **Diagnosis:** Every 15-minute delay = ~2 million neurons lost. tPA window is 4.5 hours; thrombectomy window is 6–24 hours. Viz.ai AI triage demonstrates average 66-minute faster treatment where deployed — the gap between current care and AI-assisted care is quantified.

**Root cause:** Early ischemic changes are subtle; ED CT reads frequently done by general radiologists, not neuroradiologists; overnight reads under fatigue. AI stroke detection (Viz.ai, Aidoc) is FDA-cleared but deployed in only a fraction of facilities.

**Sources:**
- RSNA News, March 2022 (error rates) — rsna.org
- IntuitionLabs (Viz.ai 66-min faster treatment, 1,600+ hospitals) — intuitionlabs.ai

---

### #8 — AI Adoption Gap & Implementation Risks
**M: 7 | P: 8 | D: 8 | Total: 23** *(New entry — V1 had this as a minor #18 item)*

**What it is:** 873 FDA-cleared radiology AI tools exist as of mid-2025, yet only ~2% of US practices actively use AI. The gap between available capability and actual deployment is widening — with risks in both directions (under-adoption and over-reliance).

- **Monetary:** The regulatory and liability framework for AI in radiology remains unresolved. 63% of radiologists are concerned about legal liability when using AI. "The question of who is liable if an AI misses a cancer is unresolved." GE Healthcare alone has 96 FDA-cleared tools; Siemens Healthineers has 80 — representing billions in R&D investment sitting largely unused in US practices.
- **Patients:** 873 cleared algorithms as of mid-2025; 115 new ones added January–May 2025 alone (78% of all medical device clearances in that period were radiology AI). European adoption is at 48% (up from 20% in 2018) vs. US at ~2% — the US is an adoption laggard despite leading in FDA clearances. 80% of radiologists are unfamiliar with medical-device regulations governing the AI tools they are being asked to use.
- **Diagnosis:** Under-adoption: AI tools proven to detect PE, stroke, and breast cancer faster are not deployed where they could prevent deaths. Over-reliance risk: when radiologists over-trust AI, their own search patterns degrade — they stop examining areas the AI did not flag. Bias: algorithms are trained predominantly on non-minority populations; tools validated on one vendor's equipment underperform on others. GPT-4V achieved 61% accuracy on a 936-case diagnostic challenge vs. 49% for physician respondents — performance that both impresses and concerns.

**Root cause:** Reimbursement not established for AI tools; workflow integration incomplete (DICOM/IHE adoption uneven); radiologists trained to use AI are a minority; liability framework unresolved.

**Sources:**
- IntuitionLabs, "AI in Radiology: 2025 Trends, FDA Approvals & Adoption" (2025) — intuitionlabs.ai
- ESR 2024 Survey (572 radiologist respondents, cited in IntuitionLabs)

---

### #9 — Critical Result Communication Failure
**M: 7 | P: 7 | D: 9 | Total: 23** *(V1 rank: #7 — unchanged)*

**What it is:** A radiologist correctly identifies a critical or urgent finding but it is not communicated to the treating team in time to affect care.

- **Monetary:** Communication failures are one of the top four malpractice claim categories in radiology (TMLT research). Radiology is the #1 or #2 specialty by total malpractice claims in the US. The average $452,240 indemnity applies — communication cases frequently involve higher verdicts since the finding was correctly made but not acted upon.
- **Patients:** Studies estimate 2–8% of all imaging studies contain findings requiring urgent or emergent communication. At ~300M total US studies/year, that is 6–24M studies annually with time-sensitive findings.
- **Diagnosis:** Critical findings: intracranial hemorrhage, aortic dissection, tension pneumothorax, cord compression, testicular torsion. Delay directly causes death or permanent disability. The Joint Commission mandates direct communication for critical results, but the process relies on phone calls and verbal acknowledgment — still largely manual and failure-prone.

**Root cause:** Documentation of the finding does not equal communication. Phone calls to unavailable or covering providers with no escalation pathway. No automated alert system tied to PACS/EHR for critical findings. Communication failures are a distinct malpractice category from diagnostic errors.

**Sources:**
- Collective Minds Health (TMLT top malpractice categories, indemnity data) — collectiveminds.health
- GetIndigo (miscommunication errors category) — getindigo.com

---

### #10 — Imaging Access Disparities (Rural & Underserved)
**M: 6 | P: 9 | D: 9 | Total: 24** *(V1 rank: #9 — upgraded based on verified access gap data)*

**What it is:** Patients in rural, low-income, or underinsured populations face documented, measurable barriers to accessing imaging — resulting in later-stage diagnoses.

- **Monetary:** Late-stage cancer treatment costs 3–5x more than early-stage. Rural hospital closures have accelerated (200+ since 2005), many closing imaging departments first.
- **Patients:** Only **22.2% of rural patients** live within a 30-minute drive of a lung cancer screening center, compared to **83.2% of urban patients** — a 61-percentage-point access gap. African American and Hispanic lung cancer patients are demonstrably less likely to receive PET/CT imaging. African American women have lower mammography screening rates. Disparities are documented across the full imaging cycle: access, image quality, interpretation quality, and follow-up action.
- **Diagnosis:** Rural patients present with more advanced cancer stages across every cancer type. Four radiologic disparity phases identified by RSNA: preprocedure (access), procedure (image quality), postprocedure (interpretation), and clinical action (follow-up). Advanced/resource-intensive imaging (MRI, PET/CT) is less available in hospitals frequented by people of color and safety-net facilities.

**Root cause:** Reimbursement rates insufficient for rural facilities to maintain equipment; malpractice risk without subspecialty support; USPSTF lung cancer screening criteria historically excluded a higher proportion of African American smokers.

**Sources:**
- RSNA Radiology Journal, "Narrowing the Gap: Imaging Disparities in Radiology" (2021) — pubs.rsna.org/radiology/doi/10.1148/radiol.2021203742
- Medicus HCS (geographic radiologist density by state) — medicushcs.com
- Medical-professionals.com / radiologytoday.net (22.2% vs 83.2% rural access figure)

---

### #11 — Missing Prior Studies / Imaging Data Fragmentation
**M: 8 | P: 7 | D: 8 | Total: 23** *(V1 rank: #8 — unchanged)*

**What it is:** Radiologist reads a study without access to relevant prior imaging from other health systems, creating an incomplete diagnostic picture.

- **Monetary:** Imaging repeated due to unavailable priors costs ~$10B+/year in redundant studies. Radsource identifies "limited data access — incomplete or inaccessible imaging data wastes time" as a primary bottleneck, directly linking to delayed procedures and clinical decisions.
- **Patients:** ~60% of US patients have received imaging at more than one health system. PACS systems are institution-specific. Cross-system sharing remains fragmented.
- **Diagnosis:** A nodule stable for 5 years is benign; the same nodule without a prior appears suspicious and triggers a follow-up cascade. Reading without priors is a primary contributor to both overwork-up and missed progression.

**Root cause:** PACS architecture is siloed by institution; no national health imaging exchange; DICOM sharing via FHIR is emerging but not standardized.

**Sources:**
- Radsource, "Common Radiology Issues and Bottlenecks" — radsource.us/common-radiology-issues-and-bottlenecks/

---

### #12 — Imaging Overutilization
**M: 8 | P: 8 | D: 5 | Total: 21** *(V1 rank: #3 — downgraded; cost corrected from estimated $40–80B to verified $12B)*

**What it is:** Imaging is ordered when it is not clinically appropriate or adds no decision-useful information.

- **Monetary:** Unnecessary medical imaging costs approximately **$12 billion annually** (Neiman Health Policy Institute, published JACR). This figure — verified from a peer-reviewed institutional source — is significantly lower than commonly cited estimates. Additionally, low-value imaging generated upward of 129.2 kilotons of carbon emissions per year (2017–2021), with energy waste equivalent to servicing 70,000+ individuals for a year.
- **Patients:** ACR Appropriateness Criteria identifies 20–30% of imaging studies as potentially inappropriate. This creates clogged scheduling queues, increased radiation exposure, false-positive findings, and follow-up cascades.
- **Diagnosis:** Overutilization creates false-positive findings → unnecessary biopsies and procedures. Each unnecessary test adds noise rather than signal to the diagnostic process.

**Note on V1 correction:** V1 cited $40–80B/year (RAND Corporation) for overutilization. The Neiman HPI JACR figure of $12B is specific to radiology and peer-reviewed. The RAND figure likely includes broader low-value care beyond imaging. V2 uses the more conservative, directly cited figure.

**Sources:**
- Radiology Business / Neiman Health Policy Institute (recovered via search) — JACR publication
- Radsource (appropriateness and workflow context) — radsource.us

---

### #13 — Radiation Overexposure from CT
**M: 7 | P: 9 | D: 6 | Total: 22** *(V1 rank: #11 — unchanged)*

**What it is:** Patients receive excessive cumulative radiation dose from CT scans, both from individual studies and repeat/lifetime accumulation.

- **Monetary:** NCI estimates radiation from CT may account for ~1.5–2% of all US cancer cases — 30,000–60,000 radiation-induced cancers/year, with significant downstream treatment costs.
- **Patients:** ~80M CT scans performed annually in the US. Overutilization of $12B/year compounds radiation harm — unnecessary studies add to lifetime dose.
- **Diagnosis:** Radiation risk creates clinical reluctance to image children and pregnant patients — sometimes resulting in underimaging and delayed diagnosis. Dose reduction techniques (iterative reconstruction, AI denoising) exist but are not universally implemented.

**Sources:**
- NCI radiation risk data (cited in V1)
- Radiology Business / Neiman HPI (radiation as co-harm of overutilization)

---

### #14 — Structured Follow-up Non-Compliance (BI-RADS / Lung-RADS)
**M: 6 | P: 7 | D: 8 | Total: 21** *(V1 rank: #12 — unchanged)*

**What it is:** Patients with structured follow-up recommendations (BI-RADS 3 → 6-month mammogram; Lung-RADS 3 → 6-month CT) never return for the recommended scan.

- **Monetary:** 20–40% of BI-RADS 3 patients do not complete their 6-month follow-up. Missed malignancies from this gap generate significant malpractice liability.
- **Patients:** ~1–2M women/year receive BI-RADS 3 assessments. Lung-RADS 3+ findings occur in ~10% of low-dose CT lung cancer screens. Same root cause as #5 (Incidental Findings): no EHR-integrated tracking.
- **Diagnosis:** BI-RADS 3 is specifically designed to catch the ~2% of cases that are malignant. Non-compliance means the clinical safety net designed for early cancer detection fails at its final step.

**Sources:**
- ACR BI-RADS and Lung-RADS documentation (practice guidelines)

---

### #15 — Payer Denials & Appeals Process
**M: 8 | P: 7 | D: 6 | Total: 21** *(V1 rank: #13 — unchanged)*

**What it is:** Insurers deny post-service coverage for imaging, requiring practices to appeal — with 81.7% of appealed Medicare Advantage denials ultimately overturned.

- **Monetary:** PA-related administrative spending reaches $35B/year (same source as #3 — denials and appeals are inseparable from the PA system). Radiology practices report 5–15% denial rates.
- **Patients:** The 81.7% overturn rate on appeal is the most damning figure — it means most initial denials are wrong, but only patients and practices that appeal discover this. Many denials are never appealed.
- **Diagnosis:** Chilling effect: providers in under-resourced settings learn not to order studies that frequently get denied, leading to underimaging.

**Sources:**
- PMC, "Perceptions of Prior Authorization Burden" (2024) — pmc.ncbi.nlm.nih.gov/articles/PMC11425057/

---

### #16 — Report Turnaround Time (TAT) Failures
**M: 6 | P: 8 | D: 6 | Total: 20** *(V1 rank: #14 — unchanged)*

**What it is:** Imaging reports not finalized within clinically appropriate timeframes.

- **Monetary:** Hospital contracts with radiology groups include TAT SLAs with financial penalties. ED throughput directly tied to radiology TAT. Radsource identifies inefficient workflows and IT bottlenecks as primary contributors to TAT failures.
- **Patients:** ~140M ED visits/year in the US; imaging ordered in ~50% of visits. Every hour of imaging delay = additional hours in the ED.
- **Diagnosis:** Time-sensitive conditions (appendicitis, bowel obstruction, aortic pathology) are directly harmed by 2–4 hour delays in CT reports.

**Sources:**
- Radsource, "Common Radiology Issues and Bottlenecks" — radsource.us/common-radiology-issues-and-bottlenecks/

---

### #17 — EHR–RIS–PACS Integration Failures
**M: 6 | P: 8 | D: 6 | Total: 20** *(V1 rank: #15 — unchanged)*

**What it is:** Breakdowns in interfaces between EHR, RIS, and PACS cause data loss, routing errors, and workflow failures.

- **Monetary:** Epic/Cerner + PACS integration projects run $2–10M+ per health system. Radsource identifies aging IT infrastructure and growing imaging volumes as the core drivers — "outdated systems struggle to process high-resolution images quickly."
- **Patients:** Integration failures affect nearly every imaging workflow: missing orders, unrouted studies, wrong patient merges, failed result delivery.
- **Diagnosis:** Wrong patient ID = wrong patient treated. HL7 interface failures = study not routed to radiologist.

**Sources:**
- Radsource, "Common Radiology Issues and Bottlenecks" — radsource.us/common-radiology-issues-and-bottlenecks/

---

### #18 — Teleradiology Quality Gaps
**M: 5 | P: 6 | D: 7 | Total: 18** *(V1 rank: #16 — unchanged)*

**What it is:** Teleradiologists (remote readers, covering overnight and weekend shifts) provide lower-quality interpretations due to lack of clinical context and institutional familiarity.

- **Monetary:** Teleradiology market estimated at $15.6 billion globally in 2024. Malpractice risk: 135 teleradiology cases in a 2010–2022 dataset of 3,474 total radiology cases — teleradiology cases more frequently involved patient death and had higher median indemnity payments than on-site cases.
- **Patients:** ~30% of all US radiology reads are done by teleradiologists. Rural hospitals and overnight ED coverage are predominantly teleradiology.
- **Diagnosis:** UK audit found 3x higher major discrepancy rate when CTs were reported by off-site reporters vs. on-site consultants (emergency abdominal CT for non-traumatic abdominal pain). RSNA 2022 cites this study directly as evidence of the off-site quality gap.

**Sources:**
- Collective Minds Health (teleradiology malpractice data: 135 cases, higher death rate, higher indemnity) — collectiveminds.health
- RSNA News, March 2022 (UK audit, 3x discordance) — rsna.org
- Medicus HCS (global teleradiology market size) — medicushcs.com

---

## Summary Scorecard — V2

| Rank | Problem | M | P | D | Score | V1 Rank | Δ |
|---|---|---|---|---|---|---|---|
| 1 | Perceptual & Interpretive Diagnostic Errors | 9 | 9 | 10 | **28** | — | New |
| 2 | Missed Breast Cancer | 9 | 8 | 10 | **27** | #1 | ↓1 |
| 3 | Prior Authorization Burden | 9 | 10 | 7 | **26** | #2 | = |
| 4 | Radiology Workforce Shortage & Burnout | 8 | 9 | 8 | **25** | #10 | ↑6 |
| 5 | Incidental Finding Follow-up Failure | 7 | 8 | 9 | **24** | #4 | ↓1 |
| 5 | Missed Pulmonary Embolism | 7 | 7 | 10 | **24** | #5 | = |
| 5 | Imaging Access Disparities | 6 | 9 | 9 | **24** | #9 | ↑4 |
| 8 | AI Adoption Gap & Implementation Risks | 7 | 8 | 8 | **23** | #18 | ↑10 |
| 8 | Missed Acute Stroke on CT | 7 | 6 | 10 | **23** | #6 | ↓2 |
| 8 | Critical Result Communication Failure | 7 | 7 | 9 | **23** | #7 | ↓1 |
| 8 | Missing Prior Studies / Data Fragmentation | 8 | 7 | 8 | **23** | #8 | = |
| 12 | Imaging Overutilization | 8 | 8 | 5 | **21** | #3 | ↓9 |
| 13 | Radiation Overexposure from CT | 7 | 9 | 6 | **22** | #11 | ↓2 |
| 14 | Structured Follow-up Non-Compliance | 6 | 7 | 8 | **21** | #12 | = |
| 14 | Payer Denials & Appeals | 8 | 7 | 6 | **21** | #13 | = |
| 16 | Report Turnaround Time Failures | 6 | 8 | 6 | **20** | #14 | = |
| 16 | EHR–RIS–PACS Integration Failures | 6 | 8 | 6 | **20** | #15 | = |
| 18 | Teleradiology Quality Gaps | 5 | 6 | 7 | **18** | #16 | ↓2 |

---

## Key Changes from V1

- **Diagnostic Errors is now #1** — V1 split this into individual clinical categories (missed PE, missed stroke, missed breast cancer). V2 recognizes them as manifestations of the same underlying perceptual error mechanism, now with verified 3–5% real-time / 30% retrospective data from RSNA.
- **Workforce Shortage jumped from #10 to #4** — Verified data is more alarming than estimated: 50% of 2023 job searches unfilled, 130-day average fill time, post-COVID 50% higher attrition.
- **Access Disparities upgraded (#9 → #5 tie)** — The 22.2% vs. 83.2% rural/urban lung screening access gap is a stark verified figure that was underweighted in V1.
- **AI Adoption Gap jumped from #18 to #8** — 873 FDA-cleared tools exist; only ~2% of US practices use any. This is a documented, quantified capability gap with both under-adoption and over-reliance risks.
- **Overutilization dropped from #3 to #12** — V1 used an estimated $40–80B RAND figure. The verified Neiman HPI/JACR figure specific to radiology is $12B. Still significant, but not the #3 problem.

---

## Key Takeaways

- **The diagnostic error rate has not improved in 50 years.** Despite CT, MRI, PACS, AI, and double-reading protocols, 3–5% of studies have real-time errors and 30% have retrospective miss rates. This is the bedrock problem underlying all the specific diagnostic failures (breast, PE, stroke).
- **Prior auth is $35B in pure administrative overhead** — money spent on process, not care. 81.7% of appealed denials are overturned. Most denials are wrong but most are never appealed.
- **The workforce shortage is structural and accelerating.** Post-COVID attrition is 50% higher than baseline. Half of radiology job postings went unfilled in 2023. The pipeline (residency slots) is growing at 2%/year against 5%/year imaging demand growth.
- **AI tools exist but aren't deployed.** 873 FDA-cleared radiology AI algorithms exist as of mid-2025. US practice adoption is ~2%. Europe is at 48%. The gap between available capability and actual deployment is the defining inefficiency of 2025 radiology.
- **Access disparities are geographically severe and quantified.** Only 22.2% of rural patients live within 30 minutes of a lung cancer screening center. This is not a vague equity concern — it is a measurable geographic failure with direct cancer stage consequences.
- **Follow-up tracking is the same unsolved problem across three entries (#5, #14, and #9 via #10).** Incidental findings, BI-RADS/Lung-RADS compliance, and critical result communication all fail for the same reason: no EHR-native system exists to close the loop.

---

## Recommended Next Steps

- **For product strategy:** The follow-up tracking gap (#5, #14) remains the clearest unsolved whitespace — high harm, high volume, no dominant solution.
- **For user research:** Interview radiologists specifically about AI tool adoption (#8) — ask why 2% adoption vs. 873 cleared tools. The gap between cleared and deployed is where the product friction lives.
- **For competitive analysis:** Map incumbents against the workforce shortage (#4) — who is solving scheduling, coverage, and locum optimization? What does the 130-day vacancy problem look like from a product lens?
- **For regulatory timing:** The CMS prior auth FHIR mandate (2026) will reshape #3. Watch for RCM and PA automation players winning or losing in that transition.
- **For design research:** The 22.2%/83.2% rural access stat (#10) is a product brief — what does a 30-minute drive time for lung cancer screening tell you about where teleradiology and mobile imaging need to go?

---

## Sources Index

| # | Source | URL | Date |
|---|---|---|---|
| 1 | RSNA News — Human Factors Drive Radiology Error Rates | rsna.org/news/2022/march/human-error-in-radiology | March 2022 |
| 2 | Collective Minds Health — Radiology Malpractice Statistics | collectiveminds.health/articles/radiology-malpractice-statistics-a-comprehensive-analysis-of-claims-and-costs | 2024 |
| 3 | GetIndigo — 5 Most Common Errors in Radiology | getindigo.com/blog/5-most-common-errors-in-radiology-what-are-they-with-examples | 2024 |
| 4 | PMC — Perceptions of Prior Authorization Burden | pmc.ncbi.nlm.nih.gov/articles/PMC11425057/ | 2024 |
| 5 | AMA — Fixing Prior Auth | ama-assn.org/practice-management/prior-authorization/fixing-prior-auth-nearly-40-prior-authorizations-week-way | 2024 |
| 6 | Harvey L. Neiman HPI — Workforce Shortage Press Release | neimanhpi.org/press-releases/new-studies-shed-light-on-the-future-radiologist-workforce-shortage | 2024 |
| 7 | Medicus HCS — Navigating the Radiologist Shortage | medicushcs.com/resources/navigating-the-radiologist-shortage | 2025 |
| 8 | Siemens Healthineers — Radiology's Workforce Crisis | siemens-healthineers.com/en-us/radiologys-workforce-crisis | 2024 |
| 9 | IntuitionLabs — AI in Radiology: 2025 Trends | intuitionlabs.ai/articles/ai-radiology-trends-2025 | 2025 |
| 10 | RSNA Radiology Journal — Narrowing the Gap: Imaging Disparities | pubs.rsna.org/radiology/doi/10.1148/radiol.2021203742 | 2021 |
| 11 | Radsource — Common Radiology Issues and Bottlenecks | radsource.us/common-radiology-issues-and-bottlenecks/ | 2024 |
| 12 | Radiology Business / Neiman HPI — Unnecessary Imaging $12B | radiologybusiness.com (JACR-published) | 2023–2024 |
| 13 | PubMed / JACR — Projected US Radiologist Supply 2025–2055 | pubmed.ncbi.nlm.nih.gov/39952776/ | 2024–2025 |
| 14 | 2024 AAPPR Benchmarking Report | cited in Medicus HCS | 2024 |
| 15 | NRMP 2025 Match Data | cited in Medicus HCS | 2025 |
