const { useState, useEffect, useRef, useMemo, useCallback, useLayoutEffect } = React;
const { LANES, EVENTS, BANDS, CHECKLIST, PHASES, TOTAL_DAYS, RESULTS_DAY } = window.RAD;

const UNIT = 52; // px per calendar day — uniform, so every day is evenly spaced
const PAD = 28; // top padding inside the flow

/* ------------------------------------------------------ references --- */
const REFERENCES = [
{ title: "Survey of Physician Appointment Wait Times",
  source: "AMN Healthcare", year: "2025",
  url: "https://www.amnhealthcare.com/siteassets/amn-insights/physician/ps-2025-physician-appt-wait-times---wp-v6.pdf" },
{ title: "Prior Authorization Physician Survey",
  source: "American Medical Association", year: "2026",
  url: "https://www.ama-assn.org/system/files/prior-authorization-survey.pdf" },
{ title: "X-ray: Imaging test quickly helps find diagnosis",
  source: "Mayo Clinic", year: "2024",
  url: "https://www.mayoclinic.org/tests-procedures/x-ray/about/pac-20395303" },
{ title: "Imaging Interpretation Turnaround Time More Than Doubled Between 2014 and 2023",
  source: "Neiman Health Policy Institute / JACR", year: "2026",
  url: "https://www.neimanhpi.org/press-releases/imaging-interpretation-turnaround-time-more-than-doubled-between-2014-and-2023/" },
{ title: "How Long Is the Medical Billing Cycle?",
  source: "Shoreline Medical Billing", year: "",
  url: "https://www.shorelinemb.com/blog/how-long-medical-billing-cycle.html" }];


/* ------------------------------------------------------ tone copy --- */
const COPY = {
  guide: {
    kicker: "",
    sub: "A timeline of the medical imaging process, from when symptoms first begin to when clarity is achieved.",
    checkSub: "Items appear as you reach them. Tick them off as you go!"
  },
  plain: {
    kicker: "",
    sub: "From first symptom to getting back on your feet is about 94 days and six parties. This shows every step and how long each one takes.",
    checkSub: "Items unlock as you reach that day. Check them off as you go."
  },
  reassure: {
    kicker: "",
    sub: "If the waiting feels long, it isn’t just you. Here’s the whole path, so you always know what comes next.",
    checkSub: "We’ll surface what to bring as you reach each step. Tick things off as you go."
  }
};

/* ------------------------------------------------------ tweak config --- */
const PALETTES = [
{ name: "Clinical", hues: [240, 168, 64, 305, 200, 28], primary: 240 },
{ name: "Forest", hues: [250, 150, 95, 330, 200, 35], primary: 250 },
{ name: "Dusk", hues: [285, 200, 60, 22, 235, 0], primary: 285 }];

const FONTS = {
  Editorial: { body: '"Linux Libertine", "Newsreader", Georgia, serif', mono: '"IBM Plex Mono", ui-monospace, monospace' },
  Classic: { body: 'Georgia, "Times New Roman", serif', mono: '"IBM Plex Mono", ui-monospace, monospace' },
  Modern: { body: '"Inter", system-ui, sans-serif', mono: '"IBM Plex Mono", ui-monospace, monospace' }
};
const DENSITY = { compact: 0.82, regular: 1, comfy: 1.2 };

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "palette": "Clinical",
  "font": "Editorial",
  "density": "regular",
  "tone": "guide"
} /*EDITMODE-END*/;

/* ------------------------------------------------------ helpers --- */
const laneById = Object.fromEntries(LANES.map((l) => [l.id, l]));
function phaseFor(day) {const p = PHASES.find((p) => day >= p.from && day <= p.to);return p ? p.name : "";}
const CheckIcon = () =>
<svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3.4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5" /></svg>;

function buildLayout() {
  const evDays = [...new Set(EVENTS.map((e) => e.day))].sort((a, b) => a - b);
  const firstDay = evDays[0],lastDay = evDays[evDays.length - 1];
  const slots = {};LANES.forEach((l) => {slots[l.id] = [];});
  evDays.forEach((day) => LANES.forEach((l) => {
    const evs = EVENTS.filter((e) => e.day === day && e.lane === l.id);
    if (evs.length) slots[l.id].push({ day, events: evs });
  }));
  const bandsByLane = {};LANES.forEach((l) => {bandsByLane[l.id] = [];});
  BANDS.forEach((b) => bandsByLane[b.lane].push(b));
  return { evDays, firstDay, lastDay, slots, bandsByLane };
}

/* ------------------------------------------------------ EventCard --- */
function EventCard({ ev, side, active, lit }) {
  const lane = laneById[ev.lane];
  return (
    <div className={`card ${lane.cls} ${active ? "" : "dimmed"} ${lit && active ? "lit" : ""}`} tabIndex={0}>
      <div className="clane"><span className="dot"></span>{lane.name}{ev.billing ? " · Billing" : ""}</div>
      <div className="ctitle">
        <span>{ev.title}</span>
        <span className="donecheck"><CheckIcon /></span>
      </div>
      <div className={`pop ${side}`}>
        <div className="pday mono">{phaseFor(ev.day)}{ev.billing && phaseFor(ev.day) !== "Billing" ? " · Billing" : ""}</div>
        {ev.desc}
      </div>
    </div>);
}

/* ------------------------------------------------------ Checklist --- */
function Checklist({ currentDay, activeDay, copy, onJump }) {
  const [checked, setChecked] = useState(() => {
    try {return JSON.parse(localStorage.getItem("rad_checked")) || CHECKLIST.map(() => false);}
    catch {return CHECKLIST.map(() => false);}
  });
  const prevUnlocked = useRef(0);
  const [justIdx, setJustIdx] = useState(-1);

  const unlockedCount = CHECKLIST.filter((c) => currentDay >= c.day).length;
  useEffect(() => {
    if (unlockedCount > prevUnlocked.current) {
      setJustIdx(unlockedCount - 1);
      const t = setTimeout(() => setJustIdx(-1), 1200);
      prevUnlocked.current = unlockedCount;
      return () => clearTimeout(t);
    }
    prevUnlocked.current = unlockedCount;
  }, [unlockedCount]);

  const toggle = (i) => setChecked((c) => {
    const n = [...c];n[i] = !n[i];
    try {localStorage.setItem("rad_checked", JSON.stringify(n));} catch {}
    return n;
  });

  const nextIdx = CHECKLIST.findIndex((c, i) => currentDay >= c.day && !checked[i]);

  return (
    <div className="checklist">
      <div className="chead">
        <h3>What you’ll need</h3>
        <span className="cnt mono">{unlockedCount} / {CHECKLIST.length}</span>
      </div>
      <p className="csub">{copy.checkSub}</p>
      <div className="cnow"><span className="pin"></span>{phaseFor(currentDay)}</div>
      {nextIdx >= 0 &&
      <div className="nextup">
          <div className="nk">Next, bring</div>
          <div className="nt">{CHECKLIST[nextIdx].text}</div>
        </div>
      }
      <ul className="items">
        {CHECKLIST.map((c, i) => {
          const unlocked = currentDay >= c.day;
          const isChecked = checked[i] && unlocked;
          const isActive = activeDay != null && c.day === activeDay;
          return (
            <li key={i}
            className={`item ${unlocked ? "" : "locked"} ${isChecked ? "checked" : ""} ${i === nextIdx ? "isnext" : ""} ${isActive ? "active" : ""} ${justIdx === i ? "justunlocked" : ""}`}
            onClick={() => onJump(c.day)} title={`Jump to day ${c.day}`}>
              <div className="box" onClick={(e) => {e.stopPropagation();if (unlocked) toggle(i);}} role="checkbox" aria-checked={isChecked}>
                <CheckIcon />
              </div>
              <div className="it-main">
                <div className="it-row">
                  <span className="it-text">{c.text}</span>
                  <span className="it-daytag mono">Day {c.day}</span>
                </div>
                <div className="it-detail">{c.detail}</div>
              </div>
            </li>);
        })}
      </ul>
    </div>);
}

/* ------------------------------------------------------ Tweaks --- */
function PaletteControl({ value, onChange }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 8, padding: "4px 0 2px" }}>
      {PALETTES.map((p) => {
        const sel = p.name === value;
        return (
          <button key={p.name} onClick={() => onChange(p.name)}
          style={{ display: "flex", alignItems: "center", gap: 10, cursor: "pointer",
            background: sel ? "rgba(255,255,255,.07)" : "transparent",
            border: "1px solid " + (sel ? "rgba(255,255,255,.35)" : "rgba(255,255,255,.12)"),
            borderRadius: 9, padding: "8px 11px", color: "inherit", font: "inherit", textAlign: "left" }}>
            <span style={{ display: "flex", gap: 4 }}>
              {p.hues.map((h, i) => <span key={i} style={{ width: 13, height: 13, borderRadius: 99, background: `oklch(0.6 0.13 ${h})` }} />)}
            </span>
            <span style={{ fontSize: 13 }}>{p.name}</span>
          </button>);
      })}
    </div>);
}

function TweaksUI({ t, setTweak }) {
  return (
    <TweaksPanel>
      <TweakSection label="Accent palette" />
      <PaletteControl value={t.palette} onChange={(v) => setTweak("palette", v)} />
      <TweakSection label="Typography" />
      <TweakRadio label="Type" value={t.font} options={["Editorial", "Classic", "Modern"]} onChange={(v) => setTweak("font", v)} />
      <TweakSection label="Layout" />
      <TweakRadio label="Density" value={t.density} options={["compact", "regular", "comfy"]} onChange={(v) => setTweak("density", v)} />
      <TweakSection label="Tone of voice" />
      <TweakRadio label="Tone" value={t.tone} options={["guide", "plain", "reassure"]} onChange={(v) => setTweak("tone", v)} />
    </TweaksPanel>);
}

/* ------------------------------------------------------ App --- */
function App() {
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);
  const { evDays, firstDay, lastDay, slots, bandsByLane } = useMemo(buildLayout, []);
  const [activeLanes, setActiveLanes] = useState(() => new Set(LANES.map((l) => l.id)));
  const copy = COPY[t.tone] || COPY.guide;

  // ---- responsive: single-column chronological model on mobile ----
  const [isMobile, setIsMobile] = useState(() => typeof window !== "undefined" && window.matchMedia("(max-width: 760px)").matches);
  useEffect(() => {
    const mq = window.matchMedia("(max-width: 760px)");
    const on = () => setIsMobile(mq.matches);
    mq.addEventListener ? mq.addEventListener("change", on) : mq.addListener(on);
    return () => {mq.removeEventListener ? mq.removeEventListener("change", on) : mq.removeListener(on);};
  }, []);

  const mRows = useMemo(() => {
    const dayMap = {};
    EVENTS.forEach((e) => {(dayMap[e.day] = dayMap[e.day] || []).push(e);});
    const items = [];
    Object.keys(dayMap).map(Number).forEach((d) => items.push({ type: "day", day: d, key: "d" + d, events: dayMap[d] }));
    BANDS.forEach((b, i) => items.push({ type: "band", day: b.start, endDay: b.end, key: "b" + i, band: b }));
    items.sort((a, b) => a.day - b.day || (a.type === "band" ? -1 : 1));
    return items;
  }, []);

  const y = (day) => PAD + (day - firstDay) * UNIT;
  const flowH = PAD + (lastDay - firstDay) * UNIT + 96;

  // ---- apply tweaks ----
  useEffect(() => {
    const r = document.documentElement.style;
    const pal = PALETTES.find((p) => p.name === t.palette) || PALETTES[0];
    const ln = ["patient", "physician", "insurance", "radiology", "digital", "transport"];
    pal.hues.forEach((h, i) => r.setProperty(`--h-${ln[i]}`, h));
    r.setProperty("--h-primary", pal.primary);
    const f = FONTS[t.font] || FONTS.Editorial;
    r.setProperty("--font-body", f.body);
    r.setProperty("--font-mono", f.mono);
    r.setProperty("--d", DENSITY[t.density] || 1);
  }, [t.palette, t.font, t.density]);

  // ---- scroll-spy ----
  const flowRef = useRef(null); // desktop absolute flow
  const mflowRef = useRef(null); // mobile chronological flow
  const mPosRef = useRef([]); // measured mobile row positions
  const geoRef = useRef({ top: 0, colLeft: 120, right: 900 });
  const [geo, setGeo] = useState({ colLeft: 120, right: 900 });
  const [spy, setSpy] = useState({ day: firstDay, visible: false });
  const LINE = 0.46;

  const measureMobilePositions = useCallback(() => {
    const flow = mflowRef.current;if (!flow) return;
    const rows = [...flow.querySelectorAll("[data-day]")];
    mPosRef.current = rows.map((el) => {
      const r = el.getBoundingClientRect();
      return {
        day: +el.dataset.day,
        endDay: el.dataset.endDay ? +el.dataset.endDay : +el.dataset.day,
        type: el.dataset.type,
        top: r.top + window.scrollY,
        bottom: r.bottom + window.scrollY
      };
    }).sort((a, b) => a.top - b.top);
  }, []);

  const recompute = useCallback(() => {
    if (isMobile) {
      measureMobilePositions();
      const m = 16;
      const w = window.innerWidth;
      setGeo((g) => g.colLeft === m && g.right === w - m ? g : { colLeft: m, right: w - m });
      const flow = mflowRef.current;
      if (flow) {const fr = flow.getBoundingClientRect();geoRef.current = { top: fr.top + window.scrollY, colLeft: m, right: w - m };}
      return;
    }
    const flow = flowRef.current;if (!flow) return;
    const fr = flow.getBoundingClientRect();
    const railW = parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--rail-w")) || 72;
    geoRef.current = { top: fr.top + window.scrollY, colLeft: fr.left + railW, right: fr.right };
    setGeo((g) => g.colLeft === fr.left + railW && g.right === fr.right ? g : { colLeft: fr.left + railW, right: fr.right });
  }, [isMobile, measureMobilePositions]);

  const measure = useCallback(() => {
    const lineDoc = window.scrollY + window.innerHeight * LINE;
    if (isMobile) {
      const arr = mPosRef.current;
      const flow = mflowRef.current;
      if (!arr.length || !flow) {setSpy((p) => p.visible ? { ...p, visible: false } : p);return;}
      let cur = arr[0];
      for (const row of arr) {if (lineDoc >= row.top) cur = row;else break;}
      let day = cur.day;
      if (cur.type === "band" && cur.bottom > cur.top) {
        const frac = Math.max(0, Math.min(1, (lineDoc - cur.top) / (cur.bottom - cur.top)));
        day = cur.day + frac * (cur.endDay + 1 - cur.day);
      }
      day = Math.max(firstDay, Math.min(lastDay, day));
      const fr = flow.getBoundingClientRect();
      const visible = fr.top < window.innerHeight * LINE && fr.bottom > window.innerHeight * LINE + 10;
      setSpy((prev) => Math.abs(prev.day - day) < 0.05 && prev.visible === visible ? prev : { day, visible });
      return;
    }
    const { top } = geoRef.current;
    let day = firstDay + (lineDoc - top - PAD) / UNIT;
    day = Math.max(firstDay, Math.min(lastDay, day));
    const fr = flowRef.current && flowRef.current.getBoundingClientRect();
    const visible = fr ? fr.top < window.innerHeight * LINE && fr.bottom > window.innerHeight * LINE + 10 : false;
    setSpy((prev) => Math.abs(prev.day - day) < 0.08 && prev.visible === visible ? prev : { day, visible });
  }, [isMobile, firstDay, lastDay]);

  const scrollToDay = useCallback((target, smooth) => {
    if (isMobile) {
      const arr = mPosRef.current;if (!arr.length) return;
      let row = arr.find((r) => target >= r.day && target <= r.endDay);
      if (!row) row = arr.reduce((best, r) => Math.abs(r.day - target) < Math.abs(best.day - target) ? r : best, arr[0]);
      let docY = row.top;
      if (row.type === "band" && row.endDay > row.day) {
        const frac = (target - row.day) / (row.endDay + 1 - row.day);
        docY = row.top + frac * (row.bottom - row.top);
      }
      window.scrollTo({ top: docY - window.innerHeight * LINE, behavior: smooth ? "smooth" : "auto" });
      return;
    }
    const { top } = geoRef.current;
    const docY = top + PAD + (target - firstDay) * UNIT;
    window.scrollTo({ top: docY - window.innerHeight * LINE, behavior: smooth ? "smooth" : "auto" });
  }, [isMobile, firstDay]);

  useLayoutEffect(() => {recompute();measure();}, [t.density, t.font, isMobile, recompute, measure]);
  useEffect(() => {
    let raf = 0;
    const onScroll = () => {if (raf) return;raf = requestAnimationFrame(() => {raf = 0;measure();});};
    const onResize = () => {recompute();measure();};
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);
    const ro = new ResizeObserver(() => {recompute();measure();});
    if (document.body) ro.observe(document.body);
    const t1 = setTimeout(() => {recompute();measure();}, 350);
    const t2 = setTimeout(() => {recompute();measure();}, 900);
    recompute();measure();
    return () => {window.removeEventListener("scroll", onScroll);window.removeEventListener("resize", onResize);ro.disconnect();clearTimeout(t1);clearTimeout(t2);};
  }, [recompute, measure]);

  // ---- derive lit/statuses ----
  const dayCont = spy.day;
  const sliderDay = Math.round(dayCont);
  const nearEvent = evDays.reduce((best, d) => Math.abs(d - dayCont) < Math.abs(best - dayCont) ? d : best, evDays[0]);
  const activeBand = BANDS.find((b) => dayCont >= b.start && dayCont < b.end + 1);
  const litDay = activeBand ? null : nearEvent;

  const slotStatus = (d) => litDay != null ?
  d < litDay ? "past" : d === litDay ? "now" : "future" :
  d < dayCont ? "past" : "future";
  const railStatus = (d) => litDay != null && d === litDay ? "now" : d < dayCont ? "past" : "future";
  const bandStatus = (b) => dayCont >= b.end + 1 ? "past" : dayCont < b.start ? "future" : "now";

  // ---- filters ----
  const toggleLane = (id) => setActiveLanes((prev) => {
    const n = new Set(prev);
    if (n.size === LANES.length) return new Set([id]);
    if (n.has(id)) n.delete(id);else n.add(id);
    if (n.size === 0) return new Set(LANES.map((l) => l.id));
    return n;
  });
  const allOn = activeLanes.size === LANES.length;
  const fill = (sliderDay - 1) / (TOTAL_DAYS - 1) * 100;

  return (
    <div className="app">
      {/* HERO */}
      <header className="hero">
        {copy.kicker ? <p className="kicker mono">{copy.kicker}</p> : null}
        <h1>So you need<br /><em>radiology?</em></h1>
        <p className="sub">{copy.sub}</p>
        <div className="meta">
          <div className="metric"><div className="n mono">94</div><div className="l">days, start to finish</div></div>
          <div className="metric"><div className="n mono">38</div><div className="l">days before the first visit</div></div>
          <div className="metric"><div className="n mono">6</div><div className="l">parties involved</div></div>
        </div>
        <p className="howto">
          <em>Imagine <b>you are 19 years old</b> and in your second year of university. Fond of running, you often jog each
          morning before your classes. However, <b>you’ve recently started feeling a sharp pain in your right shin</b> as you
          begin your run, leaving you limping when you walk the rest of the day. <b>The pain quickly worsens and you know it
          is time to seek medical help.</b></em>
          <br /><br />
          <b>Scroll through the timeline</b> to move along the journey. 

          <b> Tap or hover any event</b> to read what’s happening, and use the
          <b> filters up top</b> to focus on who’s involved.
          <br /><a href="#references" className="reflink" onClick={(e) => {e.preventDefault();const el = document.getElementById("references");if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 80, behavior: "smooth" });}}>Timeline based on national averages — see references ↓</a>
        </p>
      </header>

      {/* STAGE */}
      <div className="stage">
        <div className="tl">
          {/* sticky filter headers, one per column */}
          <div className="colhead">
            <div className="ch-rail">{!allOn && <button className="ch-all" onClick={() => setActiveLanes(new Set(LANES.map((l) => l.id)))}>Show<br />all</button>}</div>
            {LANES.map((lane) =>
            <button key={lane.id} className={`colchip ${lane.cls} ${activeLanes.has(lane.id) ? "" : "off"}`} onClick={() => toggleLane(lane.id)}>
                <span className="dot"></span>{lane.name}
              </button>
            )}
          </div>

          <div className="flow" ref={flowRef} style={{ height: flowH, display: isMobile ? "none" : "grid" }}>
            <div className="tracks">
              <div></div>
              {LANES.map((l) => <div className="trk" key={l.id}></div>)}
            </div>

            {/* rail: day numbers + waiting-range labels */}
            <div className="railcol">
              {evDays.map((d) =>
              <div key={"d" + d} className={`rday ${railStatus(d)}`} style={{ top: y(d) }}>
                  <span className="dnum mono">DAY {d}</span>
                </div>
              )}
              {BANDS.map((b, i) =>
              <div key={"r" + i} className="rrange mono" style={{ top: PAD + ((b.start + b.end + 1) / 2 - firstDay) * UNIT - 7 }}>
                  DAY {b.start}{b.end > b.start ? `–${b.end}` : ""}
                </div>
              )}
            </div>

            {/* lane columns */}
            {LANES.map((lane, li) => {
              const side = li >= 3 ? "right" : "left";
              const on = activeLanes.has(lane.id);
              return (
                <div className={`lanecol ${lane.cls}`} key={lane.id}>
                  {bandsByLane[lane.id].map((b, i) => {
                    const dn = b.end - b.start + 1;
                    return (
                      <div key={"b" + i} className={`band-abs is-${bandStatus(b)}`} style={{ top: y(b.start), height: dn * UNIT }}>
                        <div className={`band ${dn <= 5 ? "compact" : ""} ${on ? "" : "dimmed"}`}>
                          <div className="bdays">{dn} {dn === 1 ? "day" : "days"} pass</div>
                          <div className="blabel">{b.label}</div>
                          {b.note && dn >= 4 && <div className="bnote">{b.note}</div>}
                          {b.tip && dn >= 9 &&
                          <div className="btip"><span className="bk">While you wait</span><span className="bx">{b.tip}</span></div>}
                        </div>
                      </div>);
                  })}
                  {slots[lane.id].map((s, i) =>
                  <div key={"s" + i} className={`slot is-${slotStatus(s.day)}`} style={{ top: y(s.day) }}>
                      {s.events.map((ev, j) =>
                    <EventCard key={j} ev={ev} side={side} active={on} lit={litDay != null && s.day === litDay} />
                    )}
                    </div>
                  )}
                </div>);
            })}
          </div>

          {/* mobile: single chronological column */}
          <div className="mflow" ref={mflowRef} style={{ display: isMobile ? "block" : "none" }}>
            {mRows.map((row) => {
              if (row.type === "day") {
                const st = slotStatus(row.day);
                return (
                  <div className="mrow" data-day={row.day} data-type="day" key={row.key}>
                    <div className={`mday mono ${railStatus(row.day)}`}>DAY {row.day}</div>
                    <div className={`slot is-${st}`}>
                      {row.events.map((ev, j) =>
                      <EventCard key={j} ev={ev} side="left" active={activeLanes.has(ev.lane)} lit={litDay != null && row.day === litDay} />
                      )}
                    </div>
                  </div>);
              }
              const b = row.band,dn = b.end - b.start + 1,on = activeLanes.has(b.lane),lane = laneById[b.lane];
              const h = Math.max(116, Math.min(248, dn * 7));
              return (
                <div className="mrow mrow-band" data-day={b.start} data-end-day={b.end} data-type="band" key={row.key}>
                  <div className="mday mono">DAY {b.start}{b.end > b.start ? `\u2013${b.end}` : ""}</div>
                  <div className={`band-abs is-${bandStatus(b)} ${lane.cls}`} style={{ height: h }}>
                    <div className={`band ${dn <= 5 ? "compact" : ""} ${on ? "" : "dimmed"}`}>
                      <div className="mband-lane"><span className="dot"></span>{lane.name}</div>
                      <div className="bdays">{dn} {dn === 1 ? "day" : "days"} pass</div>
                      <div className="blabel">{b.label}</div>
                      {b.note && <div className="bnote">{b.note}</div>}
                      {b.tip && dn >= 9 &&
                      <div className="btip"><span className="bk">While you wait</span><span className="bx">{b.tip}</span></div>}
                    </div>
                  </div>
                </div>);
            })}
          </div>
        </div>

        <aside className="aside">
          <Checklist currentDay={Math.max(1, Math.floor(dayCont))} activeDay={litDay} copy={copy} onJump={(d) => scrollToDay(d, true)} />
        </aside>
      </div>

      {/* CARE PLAN — paying the bill */}
      <section className="careplan">
        <h2>Paying <em>the bill</em></h2>
        <p className="cp-lede">
          The timeline ends, but your part doesn’t. Here’s how to close out the cost without overpaying.
        </p>
        <ul className="cp-list">
          <li>Check the bill against your <b>explanation of benefits (EOB)</b> first. Request an <b>itemized bill</b> and make sure you’re not charged for anything insurance already covered.</li>
          <li>Ask the billing office about an <b>interest-free payment plan</b>, a <b>prompt-pay discount</b>, or <b>financial assistance / charity care</b> (many offer it but rarely advertise it).</li>
          <li><b>Dispute errors</b>: appeal denials with your insurer in writing, and use the <b>No Surprises Act</b> for unexpected out-of-network charges.</li>
          <li>Don’t ignore it! Unpaid balances can go to <b>collections</b> after roughly 60–120 days; you generally have a one-year grace period before most medical debt can appear on your credit report.</li>
        </ul>
        <p className="cp-note">
          Not medical or financial advice — talk to your provider and your insurer about what’s right for you. Rules on
          medical debt and credit reporting vary by state and change over time.
        </p>
      </section>

      {/* references */}
      <section id="references" className="refs">
        <div className="refs-head">
          <span className="refs-k mono">References</span>
          <h2>How this timeline was built</h2>
          <p className="refs-intro">
            Day counts reflect national averages drawn from the sources below. Your own experience will vary with your plan,
            your providers, and how busy they are. This is an orientation tool, not medical or scheduling advice.
          </p>
        </div>
        <ol className="reflist">
          {REFERENCES.map((r, i) =>
          <li key={i} className="refitem">
              <span className="refnum mono">{String(i + 1).padStart(2, "0")}</span>
              <div className="refbody">
                <a className="reftitle" href={r.url} target="_blank" rel="noopener noreferrer">{r.title} <span className="refext">↗</span></a>
                <div className="refsrc">{r.source}{r.year ? ` · ${r.year}` : ""}</div>
              </div>
            </li>
          )}
        </ol>
      </section>

      {/* fixed left scrubber (day 1 → day 89) */}
      <div className="scrollrail">
        <div className="sr-cap">Day 1</div>
        <div className="sr-track">
          <input type="range" min="1" max={TOTAL_DAYS} value={sliderDay} style={{ "--fill": fill + "%" }}
          onChange={(e) => scrollToDay(+e.target.value)} aria-label="Scrub through the journey" />
        </div>
        <div className="sr-cap">Day {TOTAL_DAYS}</div>
      </div>

      {/* always-visible you-are-here line (spans the timeline only) */}
      <div className={`hereline ${spy.visible ? "on" : ""}`}>
        <div className="hl-line" style={{ left: geo.colLeft, width: Math.max(0, geo.right - geo.colLeft) }}></div>
        <div className="hl-tag" style={{ right: Math.max(8, (typeof window !== "undefined" ? window.innerWidth : 1200) - geo.colLeft) }}>
          <span className="k">You are here</span><span className="d">Day {sliderDay}</span>
        </div>
      </div>

      <TweaksUI t={t} setTweak={setTweak} />
    </div>);
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
