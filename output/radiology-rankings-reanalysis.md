# Radiology Problems — Re-Ranked by Patients + Monetary Impact
**Date:** June 11, 2026  
**Source data:** `radiology-stats-research.md`  
**Original rankings:** Based on equal weighting of Monetary + Patients + Diagnosis (0–100 severity index)  
**This analysis:** Patients and monetary impact only, weighted 50/50

---

## Methodology

Each problem is scored 1–9 on two dimensions:

- **Patient score (1–9):** Based on the best available annual patient figure from the research file. Scores by raw magnitude of reach/impact. Figures are not all the same type — see "Figure Type" column for the nature of each number (direct harm, structural gap, exposure, rate).
- **Money score (1–9):** Based on the best available annual dollar figure. Scored by magnitude relative to the other problems. Figures with major scope caveats (not radiology-specific, market size rather than harm cost) are scored conservatively.
- **Combined score:** (Patient score + Money score) / 2. Higher = more severe on these two dimensions.

**All cited and derived figures are used.** Derived estimates are noted with an asterisk (*). Edge cases for P5, P6, P8, and P9 are explained in the Caveats section.

---

## Scoring Matrix

| Old Rank | Problem | Patient Figure | Figure Type | Patient Score | Money Figure | Money Score | Combined |
|---|---|---|---|---|---|---|---|
| 1 | Diagnostic Errors | ~35M imaging studies/year with errors* | Studies at risk | 6 | $400M–$1B+/yr malpractice indemnity* | 7 | **6.5** |
| 2 | Prior Authorization | 50M MA prior auth determinations (2023) | System reach — all patients burdened | 8 | $35B/yr admin overhead | 9 | **8.5** |
| 3 | Workforce Shortage | Supply lags demand through 2055; no reliable annual patient count | Structural — no annual count | 5 | $100M–$300M/yr locum/teleradiology premium* | 4 | **4.5** |
| 4 | Communication Failures | 1 in 7 patients with a major finding gets no follow-up | Harm rate — no reliable absolute count | 3 | $300M–$750M/yr communication-failure malpractice* | 6 | **4.5** |
| 5 | Racial Equity | ~3M missing imaging encounters/yr (Black ED patients only)* | Derived gap — ED only | 4 | $451B/yr total US health disparities (not radiology-specific) ⚠ | 5 | **4.5** |
| 6 | Access Deserts | ~46.7M rural Americans lack 30-min imaging access* | Structural gap — not annual harm | 7 | 33% of rural inter-facility transfers are CT-driven (no $ total) | 1 | **4.0** |
| 7 | Radiation Overexposure | 103K future cancers projected from 2023 CT use (JAMA 2025) | Direct physical harm | 2 | $1.5B–$5.5B/yr CT-induced cancer treatment costs* | 8 | **5.0** |
| 8 | Reimbursement Collapse | ~3,500 practices lost from Medicare 2015–2022 | Indirect structural | 1 | 33% Medicare pay cut; 43.1% lower cash flow — rate metrics only, no total $ | 2 | **1.5** |
| 9 | AI Bias | ~100–150M US studies/yr involving FDA-cleared AI* | Broad exposure — not confirmed harm count ⚠ | 9 | $524M US radiology AI market (2024) — market size, not harm cost ⚠ | 3 | **6.0** |

*Derived estimate — see `radiology-stats-research.md` for methodology  
⚠ Edge case — see Caveats section

---

## Re-Ranked List

| New Rank | Problem | Old Rank | Shift | Combined Score | Key Driver |
|---|---|---|---|---|---|
| **1** | Prior Authorization | 2 | ↑ 1 | 8.5 | $35B in confirmed admin overhead + 50M patients burdened annually — strongest figures in the dataset on both dimensions |
| **2** | Diagnostic Errors | 1 | ↓ 1 | 6.5 | 35M studies at risk is the second-largest patient figure; malpractice costs are large but still derived/estimated |
| **3** | AI Bias | 9 | ↑ 6 | 6.0 | 100–150M studies/yr with FDA-cleared AI gives the broadest patient reach in the dataset — but noted as exposure, not confirmed harm |
| **4** | Radiation Overexposure | 7 | ↑ 3 | 5.0 | $1.5B–$5.5B cancer treatment cost is the second-largest direct dollar figure; 103K projected cancers is the most concrete direct-harm patient count |
| **5 (tied)** | Workforce Shortage | 3 | ↓ 2 | 4.5 | Shortage is structurally severe but lacks a reliable annual patient count — scores mid-range on both dimensions |
| **5 (tied)** | Communication Failures | 4 | ↓ 1 | 4.5 | "1 in 7" is a powerful rate but without an absolute count it can't score higher; malpractice cost is mid-range |
| **5 (tied)** | Racial Equity | 5 | — | 4.5 | Patient gap is ED-limited (3M); $451B money figure is not radiology-specific — scores conservatively on both |
| **8** | Access Deserts | 6 | ↓ 2 | 4.0 | Large structural access gap (46.7M) scores well on patients but there is no dollar figure — that zero drags it down |
| **9** | Reimbursement Collapse | 8 | ↓ 1 | 1.5 | No reliable total-dollar figure exists (rate metrics only) and patient impact is indirect — lowest score on both dimensions under this framework |

---

## Notable Shifts

- **Prior Authorization rises to #1.** The $35B annual admin overhead is the single most confirmed, large-scale monetary figure in the entire dataset — almost three orders of magnitude larger than any other problem's money figure. Combined with 50M Medicare Advantage patients going through prior auth annually, it dominates this two-factor framework even though it ranked #2 originally.

- **AI Bias jumps from #9 to #3.** AI was ranked last because its diagnostic harm was hard to quantify. But its patient reach (100–150M studies/year now involving FDA-cleared AI) is the broadest in the dataset. This is an exposure figure — it doesn't mean 100M patients are harmed — but under a "scope of population touched" interpretation, it scores very high. The fact that only 4% of those products disclosed demographic data means the true harm rate is unknown but potentially large.

- **Radiation rises from #7 to #4.** The 2025 JAMA Internal Medicine update (103K projected cancers from 2023 CT use) combined with the derived treatment cost ($1.5B–$5.5B/yr) gives Radiation a strong money score. It moved up because its harm is both direct and economically quantifiable — unlike some higher-ranked problems where either the patient count or the dollar figure is weak.

- **Reimbursement drops to #9 (from #8).** Reimbursement remains last because this framework penalizes problems with no direct patient count and no total-dollar figure. The 33% pay cut is real and severe, but it's a rate, not a total — and its patient impact (practice closures → reduced access) is indirect. Under a patients+money lens, it reads as an internal industry problem more than a direct patient-facing one.

- **Three-way tie at #5** (Workforce, Communication, Equity) suggests these three problems are comparably impactful under this framework — each has one strong dimension and one weak one. Workforce has a serious structural threat but lacks an annual patient count; Communication has a confirmed harm rate but no absolute count; Equity has a real patient gap but its money figure is not radiology-specific.

---

## Caveats

**P5 — Racial Equity: Money figure not radiology-specific.**  
The $451B figure (LaVeist et al., NIH-funded, JAMA 2023) is the total annual cost of all US racial and ethnic health disparities — not a radiology figure. A radiology-specific dollar estimate does not exist in the published literature. Scored conservatively at 5/9 to reflect that imaging disparities are a real but unquantified subset of this total.

**P6 — Access Deserts: No direct dollar figure.**  
No study totals the annual economic cost of rural imaging inaccessibility. The 33% of rural inter-facility transfers being CT-driven is proportional, not a dollar amount. This is the main reason Access Deserts drops two places — a large structural patient gap with no matching dollar evidence.

**P8 — Reimbursement: Rate metrics only, no total dollar.**  
"33% Medicare pay cut" and "43.1% lower cash flow per radiologist" describe severity of cuts, not total dollars lost. Without an aggregate figure (e.g., total annual radiology Medicare reimbursement × 33%), the money score can only reflect rate severity. The NPDB would be needed for a defensible total malpractice dollar figure, and a similar CMS data pull for total reimbursement.

**P9 — AI Bias: Patient figure is exposure, not confirmed harm.**  
100–150M studies/year involving FDA-cleared AI is derived from company deployment disclosures (Aidoc: 60M, Radiology Partners: 20M, others). It represents the population exposed to AI tools with inadequate demographic validation — not a count of patients harmed by AI bias. If actual AI error rates for underrepresented groups were measurable, P9's patient score would be more defensible. As stated, it's the broadest reach figure in the dataset.
