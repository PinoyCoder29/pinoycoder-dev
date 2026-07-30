import Link from "next/link";
import { Projects } from "@/config/projects";
import { notFound } from "next/navigation";

export default async function ProjectDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const project = Projects.find((item) => item.slug === slug);

  if (!project) {
    notFound();
  }

  const isInProgress = project.hero?.status === "In Development";

  const contextRows = [
    { label: "Background", value: project.context?.background },
    { label: "Problem", value: project.context?.problem },
    { label: "Goal", value: project.context?.goal },
  ].filter((r) => r.value);

  return (
    <main className="text-light min-vh-100" style={{ background: "#030303" }}>
      {/* Sticky top bar */}
      <div
        className="border-bottom sticky-top"
        style={{
          background: "rgba(13,17,23,0.85)",
          backdropFilter: "blur(8px)",
          borderColor: "#21262d",
          zIndex: 20,
        }}
      >
        <div
          className="container d-flex align-items-center justify-content-between py-2"
          style={{ maxWidth: "1120px" }}
        >
          <Link
            href="/projects"
            className="text-secondary text-decoration-none d-inline-flex align-items-center gap-2 small"
          >
            <i className="bi bi-arrow-left"></i>
            Projects
          </Link>

          <div className="d-flex align-items-center gap-2 small">
            <div
              className="rounded-circle d-flex align-items-center justify-content-center"
              style={{
                width: 22,
                height: 22,
                background: "#30363d",
                fontSize: "0.65rem",
              }}
            >
              pc
            </div>
            <span className="text-info">pinoycoder</span>
            <span className="text-secondary">/</span>
            <span className="fw-semibold">{project.slug}</span>
          </div>
        </div>
      </div>

      <div className="container py-4" style={{ maxWidth: "1120px" }}>
        {/* Header card */}
        <div
          className="rounded-4 p-4 p-md-5 mb-4"
          style={{
            background: "linear-gradient(180deg, #0c0c0c 0%, #0d1117 100%)",
            border: "1px solid #21262d",
          }}
        >
          <div className="d-flex align-items-start justify-content-between flex-wrap gap-3 mb-3">
            <div>
              <span
                className="badge rounded-pill mb-2"
                style={{
                  background: isInProgress
                    ? "rgba(210,153,34,0.12)"
                    : "rgba(46,160,67,0.12)",
                  color: isInProgress ? "#d29922" : "#3fb950",
                  border: `1px solid ${
                    isInProgress
                      ? "rgba(210,153,34,0.35)"
                      : "rgba(63,185,80,0.35)"
                  }`,
                  fontWeight: 500,
                }}
              >
                <i
                  className="bi bi-circle-fill me-1"
                  style={{ fontSize: "0.5rem" }}
                ></i>
                {project.hero?.status}
              </span>
              <h1 className="fw-bold mb-2" style={{ fontSize: "2rem" }}>
                {project.hero?.title}
              </h1>
              <p
                className="text-secondary mb-0"
                style={{ maxWidth: "58ch", fontSize: "1.05rem" }}
              >
                {project.hero?.subtitle}
              </p>
            </div>

            <div className="d-flex gap-2 flex-shrink-0">
              {project.hero?.github ? (
                <a
                  href={project.hero.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-sm d-inline-flex align-items-center gap-2 rounded-2"
                  style={{
                    background: "#607797",
                    border: "1px solid #30363d",
                    color: "#c9d1d9",
                  }}
                >
                  <i className="bi bi-github"></i>
                  Source
                </a>
              ) : null}
              <a
                href={project.hero?.path}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-sm d-inline-flex align-items-center gap-2 rounded-2 fw-semibold text-white"
                style={{
                  background: "#238636",
                  border: "1px solid rgba(240,246,252,0.1)",
                }}
              >
                <i className="bi bi-play-fill"></i>
                View project
              </a>
            </div>
          </div>

          <div className="d-flex flex-wrap gap-2">
            <span
              className="badge rounded-pill px-3 py-2 fw-normal"
              style={{
                background: "#161b22",
                border: "1px solid #30363d",
                color: "#8b949e",
              }}
            >
              <i className="bi bi-tag me-1"></i>
              {project.hero?.type}
            </span>
            <span
              className="badge rounded-pill px-3 py-2 fw-normal"
              style={{
                background: "#161b22",
                border: "1px solid #30363d",
                color: "#8b949e",
              }}
            >
              <i className="bi bi-clock-history me-1"></i>
              {project.hero?.duration}
            </span>
            <span
              className="badge rounded-pill px-3 py-2 fw-normal"
              style={{
                background: "#161b22",
                border: "1px solid #30363d",
                color: "#8b949e",
              }}
            >
              <i className="bi bi-person me-1"></i>
              {project.hero?.role}
            </span>
          </div>
        </div>

        {/* Preview */}
        {project.hero?.image ? (
          <div
            className="rounded-4 overflow-hidden mb-4"
            style={{ border: "1px solid #21262d" }}
          >
            <div
              className="d-flex align-items-center gap-2 px-3 py-2"
              style={{
                background: "#161b22",
                borderBottom: "1px solid #21262d",
              }}
            >
              <span
                className="rounded-circle"
                style={{
                  width: 10,
                  height: 10,
                  background: "#ff5f56",
                  display: "inline-block",
                }}
              ></span>
              <span
                className="rounded-circle"
                style={{
                  width: 10,
                  height: 10,
                  background: "#ffbd2e",
                  display: "inline-block",
                }}
              ></span>
              <span
                className="rounded-circle"
                style={{
                  width: 10,
                  height: 10,
                  background: "#27c93f",
                  display: "inline-block",
                }}
              ></span>
              <span className="small text-secondary text-truncate ms-2">
                {project.hero?.path}
              </span>
            </div>
            <img
              src={project.hero.image}
              alt={`${project.hero?.title} preview`}
              className="w-100 d-block"
            />
          </div>
        ) : null}

        {/* Tab bar (cosmetic) */}
        <div
          className="d-flex gap-4 mb-4 px-1"
          style={{ borderBottom: "1px solid #21262d" }}
        >
          {[
            { label: "Overview", icon: "bi-book", active: true },
            { label: "Tech stack", icon: "bi-cpu" },
            { label: "Timeline", icon: "bi-diagram-3" },
          ].map((tab) => (
            <span
              key={tab.label}
              className={`d-inline-flex align-items-center gap-2 small pb-2 ${
                tab.active ? "fw-semibold text-light" : "text-secondary"
              }`}
              style={{
                borderBottom: tab.active
                  ? "2px solid #f78166"
                  : "2px solid transparent",
              }}
            >
              <i className={`bi ${tab.icon}`}></i>
              {tab.label}
            </span>
          ))}
        </div>

        {/* Content grid */}
        <div className="row g-4">
          {/* README column */}
          <div className="col-12 col-lg-8">
            <div
              className="rounded-4 overflow-hidden"
              style={{ border: "1px solid #21262d" }}
            >
              <div
                className="d-flex align-items-center gap-2 px-4 py-3 small text-secondary"
                style={{
                  background: "#161b22",
                  borderBottom: "1px solid #21262d",
                }}
              >
                <i className="bi bi-file-earmark-text"></i>
                README.md
              </div>

              <div className="p-4 p-md-5" style={{ background: "#0d1117" }}>
                {/* Overview */}
                <Section id="overview" title="Overview">
                  <p
                    className="mb-3"
                    style={{ color: "#c9d1d9", lineHeight: 1.8 }}
                  >
                    {project.overview?.description}
                  </p>
                  {project.overview?.users?.length ? (
                    <div className="d-flex flex-wrap gap-2 mb-5">
                      {project.overview.users.map((user) => (
                        <span
                          key={user}
                          className="badge rounded-pill px-3 py-2 fw-normal small"
                          style={{
                            background: "rgba(88,166,255,0.1)",
                            border: "1px solid rgba(88,166,255,0.3)",
                            color: "#79c0ff",
                          }}
                        >
                          {user}
                        </span>
                      ))}
                    </div>
                  ) : null}
                </Section>

                {/* Context */}
                {contextRows.length ? (
                  <Section id="context" title="Context">
                    <div className="d-flex flex-column gap-3 mb-5">
                      {contextRows.map((row) => (
                        <div
                          key={row.label}
                          className="rounded-3 p-3"
                          style={{
                            background: "#161b22",
                            border: "1px solid #21262d",
                          }}
                        >
                          <p
                            className="text-uppercase small mb-1"
                            style={{
                              color: "#6e7681",
                              letterSpacing: "0.04em",
                            }}
                          >
                            {row.label}
                          </p>
                          <p
                            className="mb-0"
                            style={{ color: "#c9d1d9", lineHeight: 1.7 }}
                          >
                            {row.value}
                          </p>
                        </div>
                      ))}
                    </div>
                  </Section>
                ) : null}

                {/* Responsibilities */}
                {project.responsibilities?.length ? (
                  <Section id="responsibilities" title="Responsibilities">
                    <ul className="list-unstyled mb-5">
                      {project.responsibilities.map((item, i) => (
                        <li
                          key={i}
                          className="d-flex align-items-start gap-2 mb-2"
                        >
                          <i
                            className="bi bi-check2 mt-1"
                            style={{ color: "#3fb950" }}
                          ></i>
                          <span style={{ color: "#c9d1d9", lineHeight: 1.7 }}>
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </Section>
                ) : null}

                {/* Features */}
                {project.features?.length ? (
                  <Section id="features" title="Features">
                    <div className="row g-3 mb-5">
                      {project.features.map((feature) => (
                        <div className="col-12 col-sm-6" key={feature.title}>
                          <div
                            className="rounded-3 p-3 h-100"
                            style={{
                              background: "#161b22",
                              border: "1px solid #21262d",
                            }}
                          >
                            <p className="fw-semibold mb-1">{feature.title}</p>
                            <p
                              className="small mb-0"
                              style={{ color: "#8b949e", lineHeight: 1.6 }}
                            >
                              {feature.description}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </Section>
                ) : null}

                {/* Engineering decisions */}
                {project.engineeringDecisions?.length ? (
                  <Section
                    id="engineering-decisions"
                    title="Engineering decisions"
                  >
                    <div className="d-flex flex-column gap-3 mb-5">
                      {project.engineeringDecisions.map((d) => (
                        <div key={d.title} className="d-flex gap-3">
                          <code
                            className="rounded-2 px-2 py-1 small flex-shrink-0"
                            style={{
                              background: "rgba(163,113,247,0.1)",
                              border: "1px solid rgba(163,113,247,0.3)",
                              color: "#d2a8ff",
                              height: "fit-content",
                            }}
                          >
                            {d.title}
                          </code>
                          <p
                            className="mb-0"
                            style={{ color: "#c9d1d9", lineHeight: 1.7 }}
                          >
                            {d.reason}
                          </p>
                        </div>
                      ))}
                    </div>
                  </Section>
                ) : null}

                {/* Development process */}
                {project.developmentProcess?.length ? (
                  <Section id="development-process" title="Development process">
                    <div className="mb-5">
                      {project.developmentProcess.map((step, i) => (
                        <div key={i} className="d-flex gap-3">
                          <div className="d-flex flex-column align-items-center">
                            <span
                              className="rounded-circle d-flex align-items-center justify-content-center flex-shrink-0"
                              style={{
                                width: 24,
                                height: 24,
                                background: "#238636",
                                fontSize: "0.7rem",
                                fontWeight: 600,
                              }}
                            >
                              {i + 1}
                            </span>
                            {i !== project.developmentProcess.length - 1 ? (
                              <span
                                style={{
                                  width: 1,
                                  flexGrow: 1,
                                  background: "#21262d",
                                  minHeight: 24,
                                }}
                              ></span>
                            ) : null}
                          </div>
                          <div className="pb-4">
                            <p className="fw-semibold mb-1">{step.title}</p>
                            <p
                              className="small mb-0"
                              style={{ color: "#8b949e", lineHeight: 1.6 }}
                            >
                              {step.description}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </Section>
                ) : null}

                {/* Technical challenges */}
                {project.technicalChallenges?.length ? (
                  <Section
                    id="technical-challenges"
                    title="Technical challenges"
                  >
                    <div className="d-flex flex-column gap-3 mb-5">
                      {project.technicalChallenges.map((tc, i) => (
                        <div
                          key={i}
                          className="rounded-3 p-4"
                          style={{
                            background: "#161b22",
                            border: "1px solid #21262d",
                          }}
                        >
                          <p className="d-flex align-items-center gap-2 fw-semibold mb-3">
                            <i
                              className="bi bi-exclamation-circle"
                              style={{ color: "#f85149" }}
                            ></i>
                            {tc.challenge}
                          </p>
                          <div className="row g-3 small">
                            <div className="col-12 col-md-4">
                              <p
                                className="text-uppercase mb-1"
                                style={{
                                  color: "#6e7681",
                                  letterSpacing: "0.04em",
                                }}
                              >
                                Analysis
                              </p>
                              <p className="mb-0" style={{ color: "#8b949e" }}>
                                {tc.analysis}
                              </p>
                            </div>
                            <div className="col-12 col-md-4">
                              <p
                                className="text-uppercase mb-1"
                                style={{
                                  color: "#6e7681",
                                  letterSpacing: "0.04em",
                                }}
                              >
                                Solution
                              </p>
                              <p className="mb-0" style={{ color: "#8b949e" }}>
                                {tc.solution}
                              </p>
                            </div>
                            <div className="col-12 col-md-4">
                              <p
                                className="text-uppercase mb-1"
                                style={{
                                  color: "#6e7681",
                                  letterSpacing: "0.04em",
                                }}
                              >
                                Impact
                              </p>
                              <p className="mb-0" style={{ color: "#8b949e" }}>
                                {tc.impact}
                              </p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </Section>
                ) : null}

                {/* Lessons learned */}
                {project.lessonsLearned?.length ? (
                  <Section id="lessons-learned" title="Lessons learned">
                    <ul className="list-unstyled mb-5">
                      {project.lessonsLearned.map((item, i) => (
                        <li
                          key={i}
                          className="d-flex align-items-start gap-2 mb-2"
                        >
                          <i
                            className="bi bi-lightbulb mt-1"
                            style={{ color: "#d29922" }}
                          ></i>
                          <span style={{ color: "#c9d1d9", lineHeight: 1.7 }}>
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </Section>
                ) : null}

                {/* Outcome */}
                {project.outcome?.achievements?.length ? (
                  <Section id="outcome" title="Outcome">
                    <p className="small mb-3" style={{ color: "#8b949e" }}>
                      Deployment:{" "}
                      <span style={{ color: "#c9d1d9" }}>
                        {project.outcome.deployment}
                      </span>
                    </p>
                    <ul className="list-unstyled mb-5">
                      {project.outcome.achievements.map((item, i) => (
                        <li
                          key={i}
                          className="d-flex align-items-start gap-2 mb-2"
                        >
                          <i
                            className="bi bi-trophy mt-1"
                            style={{ color: "#d29922" }}
                          ></i>
                          <span style={{ color: "#c9d1d9", lineHeight: 1.7 }}>
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </Section>
                ) : null}

                {/* Roadmap */}
                {project.roadmap?.length ? (
                  <Section id="roadmap" title="Roadmap">
                    <ul className="list-unstyled mb-5">
                      {project.roadmap.map((item, i) => (
                        <li
                          key={i}
                          className="d-flex align-items-start gap-2 mb-2"
                        >
                          <input
                            type="checkbox"
                            disabled
                            className="form-check-input mt-1"
                            style={{
                              background: "#161b22",
                              borderColor: "#30363d",
                            }}
                          />
                          <span style={{ color: "#c9d1d9", lineHeight: 1.7 }}>
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </Section>
                ) : null}

                {/* Reflection */}
                {project.reflection ? (
                  <Section id="reflection" title="Reflection">
                    <blockquote
                      className="mb-0 ps-3"
                      style={{ borderLeft: "3px solid #30363d" }}
                    >
                      <p
                        className="fst-italic mb-0"
                        style={{ color: "#8b949e", lineHeight: 1.8 }}
                      >
                        {project.reflection}
                      </p>
                    </blockquote>
                  </Section>
                ) : null}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="col-12 col-lg-4">
            <div className="position-sticky" style={{ top: "76px" }}>
              {/* About */}
              <div
                className="rounded-4 p-4 mb-3"
                style={{ background: "#161b22", border: "1px solid #21262d" }}
              >
                <h3
                  className="fw-semibold small text-uppercase mb-3"
                  style={{ color: "#8b949e", letterSpacing: "0.04em" }}
                >
                  About
                </h3>
                <p
                  className="small mb-3"
                  style={{ color: "#8b949e", lineHeight: 1.6 }}
                >
                  {project.overview?.description}
                </p>

                <ul className="list-unstyled d-flex flex-column gap-2 mb-0 small">
                  <li className="d-flex align-items-center gap-2">
                    <i
                      className="bi bi-diagram-3"
                      style={{ color: "#6e7681" }}
                    ></i>
                    <span style={{ color: "#8b949e" }}>Role</span>
                    <span className="ms-auto fw-semibold">
                      {project.hero?.role}
                    </span>
                  </li>
                  <li className="d-flex align-items-center gap-2">
                    <i
                      className="bi bi-calendar3"
                      style={{ color: "#6e7681" }}
                    ></i>
                    <span style={{ color: "#8b949e" }}>Duration</span>
                    <span className="ms-auto fw-semibold">
                      {project.hero?.duration}
                    </span>
                  </li>
                  <li className="d-flex align-items-center gap-2">
                    <i
                      className="bi bi-bookmark"
                      style={{ color: "#6e7681" }}
                    ></i>
                    <span style={{ color: "#8b949e" }}>Type</span>
                    <span className="ms-auto fw-semibold">
                      {project.hero?.type}
                    </span>
                  </li>
                </ul>
              </div>

              {/* Topics */}
              {project.overview?.users?.length ? (
                <div
                  className="rounded-4 p-4 mb-3"
                  style={{ background: "#161b22", border: "1px solid #21262d" }}
                >
                  <h3
                    className="fw-semibold small text-uppercase mb-3"
                    style={{ color: "#8b949e", letterSpacing: "0.04em" }}
                  >
                    Topics
                  </h3>
                  <div className="d-flex flex-wrap gap-2">
                    {project.overview.users.map((user) => (
                      <span
                        key={user}
                        className="badge rounded-pill px-3 py-2 fw-normal small"
                        style={{
                          background: "rgba(88,166,255,0.1)",
                          border: "1px solid rgba(88,166,255,0.3)",
                          color: "#79c0ff",
                        }}
                      >
                        {user}
                      </span>
                    ))}
                  </div>
                </div>
              ) : null}

              {/* Languages */}
              {project.techStack?.length ? (
                <div
                  className="rounded-4 p-4"
                  style={{ background: "#161b22", border: "1px solid #21262d" }}
                >
                  <h3
                    className="fw-semibold small text-uppercase mb-3"
                    style={{ color: "#8b949e", letterSpacing: "0.04em" }}
                  >
                    Languages
                  </h3>

                  <div
                    className="d-flex rounded-pill overflow-hidden mb-3"
                    style={{ height: 8, background: "#0d1117" }}
                  >
                    {project.techStack.map((tech) => (
                      <span
                        key={tech.name}
                        title={tech.name}
                        style={{ background: tech.bgColor, flexGrow: 1 }}
                      ></span>
                    ))}
                  </div>

                  <ul className="list-unstyled d-flex flex-column gap-2 mb-0 small">
                    {project.techStack.map((tech) => (
                      <li
                        key={tech.name}
                        className="d-flex align-items-center gap-2"
                        style={{ color: "#8b949e" }}
                      >
                        <span
                          className="rounded-circle d-inline-block flex-shrink-0"
                          style={{
                            width: 10,
                            height: 10,
                            background: tech.bgColor,
                          }}
                        ></span>
                        {tech.name}
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

/**
 * Wraps a README section in an <article id="projects/<id>"> so the
 * IntersectionObserver in ProjectDetailLayout can track it and highlight
 * the matching link in the Sidebar. `scrollMarginTop` keeps the sticky
 * top bar from covering the heading when the sidebar link is clicked.
 */
function Section({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <article id={id} style={{ scrollMarginTop: "96px" }}>
      <h2
        className="fw-semibold mb-3 pb-2"
        style={{
          fontSize: "1.15rem",
          borderBottom: "1px solid #21262d",
          color: "#e6edf3",
        }}
      >
        {title}
      </h2>
      {children}
    </article>
  );
}
