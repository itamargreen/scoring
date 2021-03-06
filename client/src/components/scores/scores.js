export default {
  template: `
<scores-menu class="top-bar secondary" ng-if="scores.any() && !scores.loading" filters="scores.filters"></scores-menu>

<div class="top-bar secondary" ng-if="scores.loading"></div>

<div class="top-bar-page" ng-class="{ loading: scores.loading }">
  <div class="dimmer">
    <div class="large loader"></div>
  </div>

  <div id="scores-list" ng-if="scores.any()" class="grid-x grid-padding-x small-up-1 medium-up-3 large-up-5">
    <div ng-repeat="score in scores.data.scores" class="cell grid-x" ng-show="scores.shouldShowScore(score)">
      <score id="score-{{score._id}}" data="score" class="cell grid-y"></score>
    </div>
  </div>

  <no-scores-message ng-if="!scores.any() && !scores.loading" id="empty-scores-list" class="grid-container"></no-scores-message>
</div>

<delete-all-scores-modal></delete-all-scores-modal>`,
  controller: 'ScoresController as scores'
}
