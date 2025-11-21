import { cn } from "@/app/util/cn";
import { useGSAP } from "@gsap/react";
import { Icon } from "@iconify/react";
import gsap from "gsap";
import { useRef } from "react";
import { IconBase } from "react-icons";

export const SkillTree = ({
  skills,
  selected,
}: {
  skills: any;
  selected: any;
}) => {
  let subCounter = -1;

  let mobileViewSkills: any[] = skills.map((item: any) => item);

  skills.forEach((skill: any) => {
    if (skill.sub) {
      skill.sub.forEach((sub: any) => {
        mobileViewSkills.push(sub);
      });
    }
    return;
  });
  const containerRef = useRef(null);
  useGSAP(
    () => {
      gsap.fromTo(
        ".skillIcon",
        { opacity: 0, transformOrigin: "center" },
        {
          opacity: 1,
          duration: 0.25,
        }
      );
    },
    { scope: containerRef }
  );

  return (
    <div ref={containerRef}>
      <div className="xl:flex gap-5 text-accent hidden">
        {skills.map((skill: any, id: number) => {
          return (
            <div key={id} className="flex  flex-col ">
              <div className="flex skillIcon items-center ">
                <Icon
                  className={cn(
                    "size-12",
                    selected == id ? "text-primary" : ""
                  )}
                  icon={skill.icon}
                />
                {id != skills.length - 1 && (
                  <Icon
                    className="size-12 "
                    icon={"radix-icons:divider-horizontal"}
                  />
                )}
              </div>
              {skill.sub && (
                <div className="flex flex-col ">
                  {skill.sub.map((sub: any, id: number) => {
                    subCounter += 1;

                    return (
                      <div key={id}>
                        <Icon
                          className="size-12 "
                          icon={"radix-icons:divider-vertical"}
                        />
                        <Icon
                          className={cn(
                            "size-12",
                            selected == skills.length + subCounter
                              ? "text-primary"
                              : ""
                          )}
                          icon={sub.icon}
                        />
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
      </div>
      <div className="xl:hidden">
        <Icon
          className={cn(
            "size-12",
            selected == skills.length + subCounter ? "text-primary" : ""
          )}
          icon={mobileViewSkills[selected].icon}
        />
      </div>
    </div>
  );
};
