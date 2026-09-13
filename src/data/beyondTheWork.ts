import cueClubAwardNightGroup from '../assets/images/cue-club/cue-club-award-night-group.jpg'
import cueClubGroupPhoto from '../assets/images/cue-club/cue-club-group-photo.jpg'
import cueClubGroupWithCues from '../assets/images/cue-club/cue-club-group-with-cues.jpg'
import cueClubOfTheYearAward from '../assets/images/cue-club/cue-club-of-the-year-award.jpg'
import cueClubPoolHallAction from '../assets/images/cue-club/cue-club-pool-hall-action.jpg'
import cueClubPresentation from '../assets/images/cue-club/cue-club-presentation.jpg'
import cueClubRulesBriefing from '../assets/images/cue-club/cue-club-rules-briefing.jpg'
import cueClubTournamentTitle from '../assets/images/cue-club/cue-club-tournament-title.jpg'
import type { ExtracurricularEntry } from '../types/content'

export const extracurriculars: ExtracurricularEntry[] = [
  {
    id: 'badminton',
    title: 'Varsity Badminton',
    subtitle: 'Western University',
    description: [
      "Competed on Western's 16-person varsity badminton team for two years, training and competing nationally against other Canadian universities.",
      'Trained 4 days a week, 3 hours a session, while competing at the OUA and U Sports national level. Helped the team finish 4th at OUAs and 3rd at Nationals. Balancing varsity-level training with a full academic course load meant learning real time management and discipline under pressure, skills that carried directly into how I approach shipping real projects on tight timelines.',
    ],
    photos: [
      { id: 'badminton-1', caption: 'Varsity Badminton' },
      { id: 'badminton-2', caption: 'Varsity Badminton' },
    ],
  },
  {
    id: 'cue-club',
    title: 'Co-Founder & Co-President, Western Cue Club',
    subtitle: 'Western University',
    description: [
      'Built a new student club from the ground up, growing it to 130 members and running multiple tournaments in under two years.',
      "What started as informal pool games in the residence common area turned into a real community with no existing club to support it, so I helped build one from scratch. That meant validating the idea by collecting 50+ student signatures, then structuring the club's leadership by interviewing and hiring a Vice President and executive team.",
      "In our first semester, we grew to 80 members and ran our first tournament, a doubles event with 22 teams. By our second year, membership grew to 130, backed by a $2,000 club budget. I oversaw the club's full operations, delegating responsibilities across departments to our executive team while managing overall strategy and direction. We ran three tournaments that year, including one in collaboration with Huron's billiards club, hosted a joint social event with the Western Network Society at a bar to watch professional matches together, and grew our Instagram following to 500+.",
    ],
    photos: [
      { id: 'cue-club-1', caption: 'Club of the Year award', image: cueClubOfTheYearAward },
      { id: 'cue-club-2', caption: 'Award night with the team', image: cueClubAwardNightGroup },
      { id: 'cue-club-3', caption: 'WCC 8-Ball Tournament', image: cueClubTournamentTitle },
      { id: 'cue-club-4', caption: 'Rules briefing before play', image: cueClubRulesBriefing },
      { id: 'cue-club-5', caption: 'Club presentation', image: cueClubPresentation },
      { id: 'cue-club-6', caption: 'The executive team', image: cueClubGroupWithCues },
      { id: 'cue-club-7', caption: 'Tournament night', image: cueClubPoolHallAction },
      { id: 'cue-club-8', caption: 'Club members at Wonder Club', image: cueClubGroupPhoto },
    ],
  },
]
