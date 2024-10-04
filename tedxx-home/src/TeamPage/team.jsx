// import videoFile from "./vjitmedia/team-backgrount-3d.mp4";
import MemberCards from "./MemberCards";
import styles from "./Team.module.css";  // Import the CSS module

const TeamContent = () => {
  return (
    <>
      <div className={styles.teamContainer}>
        <video autoPlay loop muted playsInline className={styles["background-video"]}>
          <source src="/vjitmedia/team-backgrount-3d.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className={styles.toplayer}>
          <center>
            <div className={styles.afterHeader}>
              <h1>The Team</h1>
              <p>
                We’re young and driven. We’re a passionate group of individuals with a
                love for stories. From believing in fairytales in our childhoods to
                now believing that sharing stories and journeys is what creates
                fairytales. We’re not only future business leaders, but also human
                beings who want to leave the world better than we found it. We believe
                in a continuous process of rebuilding and transforming ourselves as
                the world progresses, that is what we want to bring to the viewers
                through this edition of our TEDX.
              </p>
            </div>
          </center>
          <div className={styles.Teams}>
            <div>
              <h1 className={styles.typeOfTeam}>Core Team</h1>
            </div>
            <div className={styles.coreTeamContainer}>
              <MemberCards
                imageSrc={"/media/saibaba.jpg"}
                name={"Dr.E Saibaba Reddy"}
                designation={"Principal"}
              />
              <MemberCards
                imageSrc={"/media/padmaja.jpg"}
                name={"Dr. A Padmaja"}
                designation={"Dean"}
              />
              <MemberCards
                imageSrc={"/media/srinivas.jpeg.jpg"}
                name={"Mr. B Srinivasulu"}
                designation={"HOD-IT"}
              />
              <MemberCards
                imageSrc={"/media/rajendraprasad.jpg"}
                name={"Dr.M Rajendra Prasad"}
                designation={"HOD-ECE"}
              />
              <MemberCards
                imageSrc={"/media/srujana.jpeg.jpg"}
                name={"Dr. A Srujana"}
                designation={"HOD-EEE"}
              />
              <MemberCards
                imageSrc={"/media/sreeramreddy.jpg"}
                name={"Dr. G Sreeram Reddy"}
                designation={"HOD-ME"}
              />
              <MemberCards
                imageSrc={"/media/srilatha.jpg"}
                name={"Mrs. G Srilatha"}
                designation={"Academic Coordinator"}
              />
              <MemberCards
                imageSrc={"/media/chalam.jpg"}
                name={"Mr. R V Chalam"}
                designation={"Sr Administrative Officer"}
              />
            </div>
            <div>
              <h1 className={styles.typeOfTeam}>Organisation Team</h1>
            </div>
            <div className={styles.organisationTeam}>
              <MemberCards
                imageSrc={"/media/keerthana.jpg"}
                name={"Keerthana"}
                designation={"Licensee | Organiser"}
              />
              <MemberCards
                imageSrc={"/media/akash.png"}
                name={"Akash MallaReddy"}
                designation={"Co-Organiser"}
              />
              <MemberCards
                imageSrc={"/media/ramesh.jpg"}
                name={"Dr. Ramesh Cheripelli"}
                designation={"Faculty Coordinator"}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TeamContent;
