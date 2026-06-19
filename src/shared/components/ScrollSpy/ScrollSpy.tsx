import { useEffect, useRef, useState } from "react";
import "./ScrollSpy.css";
type ScrollSpyProps = {
  sectionIds: string[];
};
export function ScrollSpy({ sectionIds }: ScrollSpyProps) {
  const [activeId, setActiveId] = useState(sectionIds[0]);
  const observerRef = useRef<IntersectionObserver>(null);
  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveId(entry.target.id);
        });
      },
      {
        threshold: 0,
        rootMargin: "-30% 0px -70% 0px",
      },
    );
    sectionIds.forEach((id) => {
      // console.log(id);
      const section = document.querySelector(`#${id}`);
      if (!section) return null;
      observerRef.current?.observe(section);
    });
    return () => {
      observerRef.current?.disconnect();
    };
  }, []);
  return (
    <nav className="scrollspy-nav">
      <ul>
        {sectionIds.map((id) => {
          return (
            <li key={id}>
              <a href={`#${id}`} className={id === activeId ? "active" : ""}>
                {/* {id.split("-").join(" ").toUpperCase()} */ "●"}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
