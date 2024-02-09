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
    date: '15',
    month: 'Feb',
    information: 'MASTURING MINDFULNESS WORKSHOP Join us for a transformative workshop focused on mastering mindfulness techniques. Enhance your mental well-being and find balance in your daily life.',
  };

  return (
    <div className="announcement-container" ref={announcementRef}>
      <div className="date-month">
        <div className="date">{announcementData.date}</div>
        <div className="month">{announcementData.month}</div>
      </div>
      <div className="information">
      <p><strong style={{ fontSize: '20px' }}>{announcementData.information.split('MASTURING MINDFULNESS WORKSHOP')[0]}</strong>
  <strong style={{ fontSize: '18px' }}>{'MASTURING MINDFULNESS WORKSHOP'}</strong>
    </p>
    <p><strong>{'Join us for a transformative workshop focused on mastering mindfulness techniques. Enhance your mental well-being and find balance in your daily life.'}</strong></p>
      </div>
    </div>
  ); 
};

export default Announcement;

