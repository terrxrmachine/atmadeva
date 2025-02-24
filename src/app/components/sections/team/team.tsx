import React from 'react';

import styles from './team.module.css';

import TeamCard from './components/team-card/team-card';
import ContentWrapper from '@/app/components/ui/content-wrapper/content-wrapper';

const Team = () => {
  return (
    <section id="team" className={styles.team}>
      <ContentWrapper>
        <h2>КОМАНДА МАСТЕРОВ</h2>
        <div className={styles.team__grid}>
          <TeamCard 
            imageSrc="/team/svet.jpg"
            alt="Светлана Савицкая"
            name="Светлана Савицкая"
            position="мастер йоги, дыхательных практик и медитаций"
          />
          <TeamCard 
            imageSrc="/team/mih.jpg"
            alt="Михаил Канц"
            name="Михаил Канц"
            position="ведический астролог, астропсихолог, писатель и исследователь"
          />
          <TeamCard 
            imageSrc="/team/val.jpg"
            alt="Валентина Тореальба"
            name="Валентина Тореальба"
            position="доктор физиотерапии, гипнотерапевт и саундхилер"
          />
        </div>
      </ContentWrapper>
    </section>
  );
};

export default Team;
