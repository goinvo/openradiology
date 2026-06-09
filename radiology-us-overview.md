# How Radiology Works in Practice (US)

---

## The Workflow Pipeline

**1. Order & Authorization**
- A referring physician (PCP, specialist, ER doctor) orders an imaging study via EHR (Epic, Cerner, etc.)
- For non-emergent studies, insurance **prior authorization** is often required — this can take hours to days
- Common payers (Medicare, Medicaid, commercial insurers) have specific criteria for coverage

**2. Scheduling & Intake**
- Patient is scheduled at a hospital radiology department, outpatient imaging center, or freestanding clinic
- Intake staff verify insurance, collect copays, and obtain any required paperwork
- Technologists ("techs") — not radiologists — actually perform the scan

**3. Image Acquisition**
- **Radiologic Technologists (RTs)** operate the equipment and position patients
- Common modalities:
  - **X-ray** — fastest, cheapest, lowest dose
  - **CT** — cross-sectional, minutes to acquire, radiation dose
  - **MRI** — no radiation, slower (30–60 min), more expensive
  - **Ultrasound** — real-time, no radiation, operator-dependent
  - **Nuclear Medicine / PET** — functional imaging using radioactive tracers
  - **Fluoroscopy** — real-time X-ray (e.g., GI studies, interventional)

**4. Interpretation (The Radiologist's Core Job)**
- Images are sent via **PACS** (Picture Archiving and Communication System) — a specialized image storage/viewing platform
- Radiologists read from workstations, often remotely (teleradiology is common)
- They dictate a **radiology report** with:
  - Technique used
  - Findings (what is observed)
  - Impression (clinical conclusions, differential diagnoses)
- Reports go back to the ordering physician via the EHR

**5. Communication of Results**
- Routine results: physician reads the report and follows up with the patient
- **Critical findings** (e.g., tension pneumothorax, PE): radiologist must directly call the ordering provider — this is a **Joint Commission requirement**
- Incidental findings trigger a whole separate workflow (often the "incidentaloma" problem)

---

## Who Are the Players?

| Role | Training | What They Do |
|---|---|---|
| **Radiologist (MD/DO)** | 4yr med school + 5yr residency + optional 1-2yr fellowship | Interprets images, performs procedures |
| **Radiology Resident** | Years 1–5 of training | Reads under supervision |
| **Radiologic Technologist (RT)** | 2yr associate or 4yr BS degree + ARRT certification | Operates equipment |
| **Sonographer** | Specialized ultrasound training | Performs US studies |
| **Radiology Nurse/PA** | Standard nursing/PA training | Contrast administration, sedation, IR assist |

Radiologists typically subspecialize: **neuroradiology, breast imaging (mammography), interventional radiology (IR), musculoskeletal, chest, abdominal, pediatric, nuclear medicine**.

---

## Interventional Radiology (IR) — A Distinct Sub-Field

IR radiologists do **minimally invasive procedures** using imaging guidance:
- Biopsies (CT-guided, US-guided)
- Drain placements
- PICC/port placement
- Embolization (e.g., uterine fibroid embolization, TACE for liver tumors)
- Stenting, angioplasty
- Tumor ablation (RFA, cryoablation)

IR has its own boards and is increasingly its own residency pathway (Integrated IR residency, 6 years).

---

## Practice Settings

| Setting | Notes |
|---|---|
| **Academic medical center** | Teaching, complex cases, research, lower volume, residents/fellows |
| **Community hospital** | Mix of cases, employed or private group model |
| **Private radiology group** | Contracted to read for multiple hospitals, often high volume |
| **Outpatient imaging center** | Lower acuity, elective studies, often physician-owned |
| **Teleradiology company** | Remote reads, often overnight/weekend coverage, nationwide |

---

## Business & Reimbursement

- Radiology is **fee-for-service** dominated — billed per study (CPT codes)
- Each study has a **Technical Component (TC)** (equipment, tech's time) and **Professional Component (PC)** (radiologist interpretation)
- In hospital-owned departments, the hospital bills TC; the radiologist group bills PC
- Medicare sets rates via **RBRVS (RVU-based)** system — CMS updates these annually
- Radiology reimbursement has been **cut repeatedly** by CMS, driving consolidation into large private equity-backed groups
- Commercial insurance rates are negotiated separately and vary widely

---

## Key Technology & IT Infrastructure

- **PACS** (GE, Philips, Sectra, Fujifilm) — image storage and viewing
- **RIS** (Radiology Information System) — scheduling, workflow, reporting
- **EHR integration** — HL7/FHIR interfaces between systems
- **AI/CAD tools** — increasingly deployed for detection (e.g., Aidoc, Viz.ai for stroke/PE triage, Nuance PowerScribe AI for reporting)
- **Voice recognition dictation** — nearly universal (Nuance PowerScribe dominates)

---

## Regulatory & Accreditation

- **ACR (American College of Radiology)** — sets practice standards, accredits imaging centers
- **FDA** — regulates mammography facilities (MQSA), some imaging equipment
- **Joint Commission / DNV** — hospital accreditation, includes radiology standards
- **State radiation control programs** — license equipment and personnel
- **HIPAA** — governs image data privacy; PACS security is a major compliance area

---

## Common Pain Points in Practice

- **Turnaround time (TAT)** pressure — hospitals track time from order to signed report
- **Prior auth burden** — radiologists and staff spend significant time on payer paperwork
- **Incidental findings** — creates liability and downstream care complexity
- **Burnout** — high read volume, night call, reimbursement cuts
- **Consolidation** — PE-backed mega-groups (Radiology Partners, Envision) vs. independent practices
- **AI disruption concern** — ongoing debate about which tasks AI will automate
