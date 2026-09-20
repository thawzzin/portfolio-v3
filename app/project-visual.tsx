import type { Project } from "./portfolio-data";

type ProjectVisualProps = Pick<Project, "slug" | "title">;

function OrderFlowVisual() {
  return (
    <div className="visual-ui visual-orderflow" aria-hidden="true">
      <div className="visual-topbar">
        <span>ORDERFLOW / TABLE 12</span>
        <span>03 ITEMS</span>
      </div>
      <div className="orderflow-menu">
        <span className="ui-kicker">Popular tonight</span>
        <strong>Choose your order</strong>
        <div className="menu-list">
          <div><i /> <span>Smoked basil noodles</span><b>฿180</b></div>
          <div><i /> <span>Crispy tofu bowl</span><b>฿160</b></div>
          <div><i /> <span>Pomelo soda</span><b>฿90</b></div>
        </div>
      </div>
      <div className="orderflow-ticket">
        <span className="ui-kicker">Live order</span>
        <strong>#A-184</strong>
        <div className="ticket-progress"><span /></div>
        <small>Kitchen is preparing your order</small>
      </div>
    </div>
  );
}

function UniFindVisual() {
  return (
    <div className="visual-ui visual-unifind" aria-hidden="true">
      <div className="unifind-header">
        <strong>UNIFIND</strong>
        <span>Campus item index</span>
      </div>
      <div className="unifind-search">Search bags, keys, cards… <b>⌕</b></div>
      <div className="unifind-grid">
        <div className="item-card item-blue"><span>FOUND</span><strong>Student ID</strong><small>Library · Today</small></div>
        <div className="item-card"><span>LOST</span><strong>Canvas tote</strong><small>Building C · Mon</small></div>
        <div className="item-card"><span>FOUND</span><strong>Silver keys</strong><small>Cafeteria · Fri</small></div>
      </div>
      <div className="unifind-match">Possible match <strong>92%</strong></div>
    </div>
  );
}

function JackVisual() {
  return (
    <div className="visual-ui visual-jack" aria-hidden="true">
      <div className="jack-sidebar">
        <strong>J/SG</strong>
        <span>DISCOVER</span>
        <span>SAVED</span>
        <span>APPLIED</span>
      </div>
      <div className="jack-content">
        <span className="ui-kicker">Open roles / Singapore</span>
        <strong>Find work that fits.</strong>
        <div className="job-row"><i>01</i><span><b>Frontend Engineer</b><small>Product · Hybrid</small></span><em>→</em></div>
        <div className="job-row"><i>02</i><span><b>UI Developer</b><small>Platform · Remote</small></span><em>→</em></div>
        <div className="job-row"><i>03</i><span><b>Software Engineer</b><small>Commerce · On-site</small></span><em>→</em></div>
      </div>
      <div className="jack-count"><span>ACTIVE ROLES</span><strong>128</strong></div>
    </div>
  );
}

function SchoolVisual() {
  return (
    <div className="visual-ui visual-school" aria-hidden="true">
      <div className="school-heading">
        <div><span className="ui-kicker">Monday, 08:30</span><strong>Good morning, Admin.</strong></div>
        <b>HS</b>
      </div>
      <div className="school-metrics">
        <div><span>STUDENTS</span><strong>1,248</strong><small>+18 this term</small></div>
        <div><span>ATTENDANCE</span><strong>94.8%</strong><small>Today</small></div>
        <div><span>CLASSES</span><strong>42</strong><small>In progress</small></div>
      </div>
      <div className="school-table">
        <div><b>Class</b><b>Teacher</b><b>Status</b></div>
        <div><span>Year 8 / A</span><span>Ms. Hla</span><em>IN CLASS</em></div>
        <div><span>Year 10 / C</span><span>Mr. Lin</span><em>IN CLASS</em></div>
      </div>
    </div>
  );
}

export function ProjectVisual({ slug, title }: ProjectVisualProps) {
  return (
    <figure
      className={`project-visual project-visual--${slug}`}
      role="img"
      aria-label={`Interface concept for ${title}`}
    >
      {slug === "orderflow" && <OrderFlowVisual />}
      {slug === "unifind" && <UniFindVisual />}
      {slug === "jack-in-sg" && <JackVisual />}
      {slug === "school" && <SchoolVisual />}
    </figure>
  );
}
