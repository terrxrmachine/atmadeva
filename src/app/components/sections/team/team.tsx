// components/team/team.tsx
import React from 'react';
import styles from './team.module.css';
import TeamCard from './components/team-card/team-card';
import ContentWrapper from '@/app/components/ui/content-wrapper/content-wrapper';

const teamMembersData = [
  {
    imageSrc: "/team/Svet-1.webp",
    alt: "Светлана Савицкая",
    name: "Светлана Савицкая",
    position: "йога-терапевт, мастер медитаций, проводник целительных энергий",
    description: "<strong>Светлана Савицкая</strong> — Ченнеллер, регрессолог, телесный терапевт с 20-летним опытом. Изучала восточные практики по всему миру Индия, Тайланд, Бали…глубоко интегрируя работу с телом, энергоструктурами и подсознанием человека. Помогает восстанавливать здоровье, раскрывать потенциал и обретать внутреннюю свободу. Использует ченнелинг, регрессию, целительные сеансы и индивидуальные медитации, создавая пространство для сильных трансформаций.",
    galleryImages: [
      { src: "/team/svet-1.webp", alt: "Светлана Савицкая проводит занятие йогой" },
      { src: "/team/svet-2.webp", alt: "Светлана Савицкая проводит занятие йогой" },
      { src: "/team/svet-3.webp", alt: "Светлана Савицкая проводит занятие йогой" },
      { src: "/team/svet-4.webp", alt: "Светлана Савицкая проводит занятие йогой" },
    ],
    telegram: "https://t.me/sveta_savitskya"
  },
  {
    imageSrc: "/team/Mih-1.webp",
    alt: "Михаил Канц",
    name: "Михаил Канц",
    position: "ведический астролог, астропсихолог, писатель и исследователь",
    description: "<strong>Михаил Канц</strong> — ведический астролог, астропсихолог, писатель и исследователь. Создал авторский метод, объединяющий ведическую астрологию, психологию, коучинг и восточную философию. Помогает людям раскрыть потенциал, осознать жизненные задачи и выстроить гармоничное будущее. Практикует 5 лет, работая с клиентами по всему миру.",
    galleryImages: [
      { src: "/team/Mih-1.webp", alt: "Михаил Канц - основное фото" },
      { src: "/team/Mih-2.webp", alt: "Михаил Канц проводит консультацию" },
      { src: "/team/Mih-3.webp", alt: "Михаил Канц проводит консультацию" },
      { src: "/team/Mih-4.webp", alt: "Михаил Канц проводит консультацию" },
    ],
    telegram: "https://t.me/mikhail_kantz_astro",
    instagram: "https://instagram.com/mikhail_kantz"
  },
  {
    imageSrc: "/team/Val-1.webp",
    alt: "Валентина Тореальба",
    name: "Валентина Тореальба",
    position: "доктор физиотерапии, гипнотерапевт и саундхилер",
    description: "<strong>Валентина Тореальба</strong> — доктор физиотерапии, гипнотерапевт и саундхилер. 20 лет в медицине, практикует регрессивный гипноз и звукотерапию. Исследует духовные практики, помогает очищаться от блоков, находить ответы на важные вопросы и раскрывать внутреннюю свободу. Ее метод — путь к легкости, гармонии и любви к себе.",
    galleryImages: [
      { src: "/team/Val-1.webp", alt: "Валентина Тореальба - основное фото" },
      { src: "/team/Val-2.webp", alt: "Валентина Тореальба проводит сеанс звукотерапии" },
      { src: "/team/Val-3.webp", alt: "Валентина Тореальба проводит сеанс звукотерапии" },
      { src: "/team/Val-4.webp", alt: "Валентина Тореальба проводит сеанс звукотерапии" },
    ],
    instagram: "https://www.instagram.com/core_strong_physical_therapy?igsh=ZnlrNG9wcnA2b21q"
  }
];

export default function Team() {
  return (
    <section id="team" className={styles.team}>
      <ContentWrapper>
        <h2>КОМАНДА МАСТЕРОВ</h2>
        <div className={styles.team__grid}>
          {teamMembersData.map((member, index) => (
          <TeamCard
            key={index}
            imageSrc={member.imageSrc}
            alt={member.alt}
            name={member.name}
            position={member.position}
            description={member.description}
            galleryImages={member.galleryImages}
            instagram={member.instagram}
            telegram={member.telegram}
          />
          ))}
        </div>
      </ContentWrapper>
    </section>
  );
};