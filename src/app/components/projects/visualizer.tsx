export const Visualizer = ({
  project,
  openDetails,
}: {
  project: any;
  openDetails: any;
}) => {
  return (
    <div className="outline-1 min-w-[250px] min-h-[500px] outline-primary space-y-5 lg:w-full">
      <div className="bg-primary text-secondary text-xl pl-10 py-2">
        {project.title}
      </div>

      <div className="h-[225px] px-5">
        <div className=" bg-accent w-full h-full"></div>
      </div>

      <div className="px-5 space-y-2  pb-6 h-full">
        <hr />
        <div className="flex flex-col h-full">
          <div className="h-[150px]">
            <p>{project.description}</p>
          </div>
          <div className="flex justify-end">
            <p onClick={openDetails} className="self-end">
              Details
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
