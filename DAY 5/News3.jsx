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
    date: '09',
    month: 'Mar',
    information: ' Outdoor Yoga in the Park Connect with nature and your practice in our outdoor yoga session at the beautiful [Park Name]. All levels welcome!',
  };

  return (
    <div className="announcement-container" ref={announcementRef}>
      <div className="date-month">
        <div className="date">{announcementData.date}</div>
        <div className="month">{announcementData.month}</div>
      </div>
      <div className="information">
        <p><strong>{announcementData.information.split('Outdoor Yoga in the Park')[0]}</strong>
  <strong style={{ fontSize: '18px' }}>{'OUTDOOR YOGA IN THE PARK'}</strong>
</p>
<p><strong>{'Connect with nature and your practice in our outdoor yoga session at the beautiful Park. All levels welcome!'}</strong></p>
      </div>
    </div>
  );
};

export default Announcement;

