import "../styles/Timeline.scss";

const Timeline = () => {
  const events = [
    {
      date: "October 2024",
      title: "Launched Personal Portfolio",
      description: "Launched my portfolio with React to showcase my projects.",
    },
    {
      date: "September 2024",
      title: "Developed News App with NYT API",
      description: "Built a news app using React and the NYT API.",
    },
    {
      date: "November 2023",
      title: "Published First Dev.to Article",
      description: "Shared my first article on Dev.to.",
    },
    {
      date: "August 2019",
      title: "Started First Commercial Job as Developer",
      description: "Started working as a developer on real projects.",
    },
  ];

  return (
    <div className="timeline-page">
      <h2 className="timeline-page__title">Timeline</h2>
      <ul className="timeline">
        {events.map((event, index) => (
          <li key={index} className="timeline__event">
            <span className="timeline__date">{event.date}</span>
            <h3 className="timeline__title">{event.title}</h3>
            <p className="timeline__description">{event.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Timeline;
