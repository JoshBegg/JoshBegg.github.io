<template>
  <div class="timeline">
    <div class="container left">
      <div class="content">
        <h2>327 B.C.</h2>
        <p>
          Bananas were originally found in South East Asia, mainly in India.
          They were brought west by Arab conquerors in 327 B.C. and moved from
          Asia Minor to Africa and finally carried to the New World by the first
          explorers and missionaries to the Caribbean. The mass production of
          bananas started in 1834 and really started exploding in the late
          1880’s.
        </p>
      </div>
    </div>
    <div class="container right">
      <div class="content">
        <h2>1870s A.D.</h2>
        <p>
          Before the 1870’s most of the land that bananas were grown on in the
          Caribbean had been previously used to grow sugar. After this time low
          marsh land started to be drained along with forests that were cleared
          in Central America for banana monocrops (which is growing one crop to
          increase productivity).
        </p>
      </div>
    </div>
    <div class="container left">
      <div class="content">
        <h2>1950s</h2>
        <p>
          In the early years of Central American banana trade the head of United
          Fruit had a marriage for political gain to the daughter of the Costa
          Rican President. This allowed hisl fruit company United Fruit to start
          acquiring the other fruit companies in the country. In the 1950’s when
          freely elected government of Guatemala threatened United Fruits
          control, United Fruit convinced the CIA that an overthrow was in
          order. The CIA placed a right-wing dictator loyal to United Fruit in
          power securing United Fruit’s position in Guatemala.
        </p>
      </div>
    </div>
    <div class="container right">
      <div class="content">
        <h2>1920s</h2>
        <p>
          The first notable disease to strike bananas was a mold called
          Fusarium, it struck the roots of the Gros Michel which is a variety of
          bananas. Fusarium was also known as Panama Disease which was carried
          in the soil. In the 1920’s a second disease struck banana crops called
          Sigatosa, which is an airborne fungus. In the mind 1920’s United Fruit
          pathologists found that they could spray the plants with a “Bordeaux
          mixture” which is a pesticide, and it helped control the Sigatosa. The
          strategy to control Fusarium was to move banana plantations every ten
          years or so. Then researchers developed a banana that was immune to
          Fusarium, the Giant Cavendish, which is the variety that has come to
          dominate modern worldwide consumption, appeared in the 1950’s.
        </p>
      </div>
    </div>
    <div class="container left">
      <div class="content">
        <h2>2003</h2>
        <p>
          According to the UNCTAD4 fair trade and organic banana production has
          been increasing. In 2003 the market for organic bananas hit 152,000
          tons and fair trade bananas hit 46,000 tons.
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
* {
  box-sizing: border-box;
}
div {
  background: #FFF8B1;
}
body {
  background-color: #474e5d;
  font-family: Helvetica, sans-serif;
}

/* The actual timeline (the vertical ruler) */
.timeline {
  position: relative;
  max-width: 1200px;
  margin: 0 auto;
}

/* The actual timeline (the vertical ruler) */
.timeline::after {
  content: "";
  position: absolute;
  width: 6px;
  background-color: white;
  top: 0;
  bottom: 0;
  left: 50%;
  margin-left: -3px;
}

/* Container around content */
.container {
  padding: 10px 40px;
  position: relative;
  background-color: inherit;
  width: 50%;
}

/* The circles on the timeline */
.container::after {
  content: "";
  position: absolute;
  width: 25px;
  height: 25px;
  right: -17px;
  background-color: white;
  border: 4px solid #FF9F55;
  top: 15px;
  border-radius: 50%;
  z-index: 1;
}

/* Place the container to the left */
.left {
  left: 0;
}

/* Place the container to the right */
.right {
  left: 50%;
}

/* Add arrows to the left container (pointing right) */
.left::before {
  content: " ";
  height: 0;
  position: absolute;
  top: 22px;
  width: 0;
  z-index: 1;
  right: 30px;
  border: medium solid white;
  border-width: 10px 0 10px 10px;
  border-color: transparent transparent transparent white;
}

/* Add arrows to the right container (pointing left) */
.right::before {
  content: " ";
  height: 0;
  position: absolute;
  top: 22px;
  width: 0;
  z-index: 1;
  left: 30px;
  border: medium solid white;
  border-width: 10px 10px 10px 0;
  border-color: transparent white transparent transparent;
}

/* Fix the circle for containers on the right side */
.right::after {
  left: -16px;
}

/* The actual content */
.content {
  padding: 20px 30px;
  background-color: white;
  position: relative;
  border-radius: 6px;
}

/* Media queries - Responsive timeline on screens less than 600px wide */
@media screen and (max-width: 600px) {
  /* Place the timelime to the left */
  .timeline::after {
    left: 31px;
  }

  /* Full-width containers */
  .container {
    width: 100%;
    padding-left: 70px;
    padding-right: 25px;
  }

  /* Make sure that all arrows are pointing leftwards */
  .container::before {
    left: 60px;
    border: medium solid white;
    border-width: 10px 10px 10px 0;
    border-color: transparent white transparent transparent;
  }

  /* Make sure all circles are at the same spot */
  .left::after,
  .right::after {
    left: 15px;
  }

  /* Make all right containers behave like the left ones */
  .right {
    left: 0%;
  }
}
</style>
