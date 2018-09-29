/* General view */

import status from './status'

/* Scoresheet view */

import scoresheet from './scoresheet/scoresheet'
import mission from './scoresheet/mission'
import objective from './scoresheet/objective'
import scoreDiffAnimation from './scoresheet/score_diff_animation'

import scoresheetMenu from './scoresheet/menu/scoresheet_menu'
import scoresheetActions from './scoresheet/menu/scoresheet_actions'
import metadataInputs from './scoresheet/menu/metadata_inputs'
import refIdentity from './scoresheet/menu/ref_identity'

import enumObjective from './scoresheet/objective_types/enum_objective'
import yesnoObjective from './scoresheet/objective_types/yesno_objective'
import numberObjective from './scoresheet/objective_types/number_objective'

/* Scores view */

import scores from './scores/scores'
import deleteAllScoresModal from './scores/delete_all_scores_modal'
import noScoresMessage from './scores/no_scores_message'

import scoresMenu from './scores/menu/scores_menu'
import scoresFilters from './scores/menu/scores_filters'
import scoresActions from './scores/menu/scores_actions'

import score from './scores/score'
import scoreMetadata from './scores/score/score_metadata'
import scorePoints from './scores/score/score_points'
import scoreRefIdentity from './scores/score/score_ref_identity'
import scoreActions from './scores/score/score_actions'
import deleteScoreModal from './scores/score/delete_score_modal'

export default {
  scoresheet,
  mission,
  objective,
  scoreDiffAnimation,

  scoresheetMenu,
  scoresheetActions,
  metadataInputs,
  refIdentity,

  enumObjective,
  yesnoObjective,
  numberObjective,

  scores,
  scoresMenu,
  scoresFilters,
  scoresActions,
  deleteAllScoresModal,
  noScoresMessage,

  score,
  scoreMetadata,
  scorePoints,
  scoreRefIdentity,
  scoreActions,
  deleteScoreModal,

  status
}
