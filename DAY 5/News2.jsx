import { useEffect, useRef } from 'react';
import './News.css';

const Announcement = () => {
  const announcementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate');
          } else {
            entry.target.classList.remove('animate');
          }
        });
      },
      { threshold: 0.5 } // Adjust the threshold as needed
    );

    observer.observe(announcementRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  const announcementData = {
    date: '21',
    month: 'Feb',
    information: 'LIVE AND ONLINE CLASSES Around 30 live classes per month directly from the studio Additionally many on demand classes',
  };

  return (
    <div className="announcement-container" ref={announcementRef}>
      <div className="date-month">
        <div className="date">{announcementData.date}</div>
        <div className="month">{announcementData.month}</div>
      </div>
      <div className="information">
      <p>
  <strong style={{ fontSize: '18px' }}>{announcementData.information.split('LIVE AND ONLINE CLASSES')[0]}</strong>
  <strong style={{ fontSize: '18px' }}>{'LIVE AND ONLINE CLASSES'}</strong>
</p>
<p><strong>{'Around 30 live classes per month directly from the studio Additionally many on-demand classes'}</strong></p>
      </div>
    </div>
  );
};

export default Announcement;

