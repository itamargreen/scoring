'use strict'

export default {
	template: `<div class="top-bar secondary">
	<div class="top-bar-left">
		<ul class="menu">
			<div>
				<ref-identity ng-if="scoresheet.isRef"></ref-identity>
			</div>
			<div>
				<form>
					<input type="text" list="teams" placeholder="Select Team" blur="submit" ng-model="scoresheet.team">
					<datalist id="teams">
						<select>
							<option type="text" ng-repeat="team in scoresheet.teams">
								{{ team.displayText }}
							</option>
						</select>
					</datalist>
				</form>
			</div>
			<div>
				<select ng-if="scoresheet.team" ng-model="scoresheet.match" ng-class="{'disabled': scoresheet.loadingMatches}">
					<option value="" disabled selected hidden>{{scoresheet.loadingMatches ? 'Loading...' : 'Select Match'}}</option>
					<option type="text" ng-repeat="match in scoresheet.matches" value="{{match.matchId}}">
						{{match.displayText}} <i ng-if="match.complete" class="fas fa-check"></i>
					</option>
				</select>
			</div>
		</ul>
	</div>
	<div class="top-bar-right flex-container">
		<ul class="menu">
			<li>
				<div class="hollow button">{{scoresheet.score()}} pts.</div>
			</li>
			<li id="default-scoresheet" ng-if="scoresheet.missions[0].objectives[0].default">
				<div class="button" data-tooltip title="Set default values" ng-if="scoresheet.isAdmin" ng-click="scoresheet.setDefault()">
					<i class="fa fa-arrow-down"></i>
				</div>
			</li>
			<li id="reset-scoresheet">
				<div class="button" data-tooltip title="Reset scoresheet" data-position="top" data-alignment="right" ng-click="scoresheet.reset()">
					<i class="fa fa-undo"></i>
				</div>
			</li>
		</ul>
	</div>
</div>
<div class="top-bar-page" ng-class="{ loading: scoresheet.loading }">
    <div class="dimmer">
        <div class="large loader"></div>
    </div>
    <div id="score-diff-animation" ng-show="isFinite(scoresheet.showingScoreDiffAnimation)">{{scoresheet.scoreDiff}}</div>
	<div class="grid-container full" ng-show="!scoresheet.loading">
		<div class="grid-x grid-padding-x grid-padding-y">
			<div class="cell large-10 large-offset-1">
				<div id="{{mission.id}}" class="callout" ng-class="{ success: mission.complete, alert: mission.error }" ng-repeat="mission in scoresheet.missions">
					<mission data="mission"></mission>
				</div>
			</div>
			<div class="cell large-10 large-offset-1">
				<div id="signature" class="callout" ng-class="{ alert: scoresheet.error(), success: !(scoresheet.error() || scoresheet.signatureMissing) }">
					<signature-pad accept="getSignature" clear="clearSignature" height="128" width="300" ng-hide="scoresheet.scoresheet._id"></signature-pad>
					<img ng-src="{{scoresheet.scoresheet.signature.dataUrl}}" ng-show="scoresheet.scoresheet._id" />
					<div class="stamp hollow alert button" ng-click="scoresheet.scrollToMission(scoresheet.error().mission)">{{scoresheet.error().error}}</div>
				</div>
			</div>
			<div class="cell small-2 small-offset-5">
				<div class="large button" ng-click="scoresheet.save()" ng-disabled="!scoresheet.complete()">Submit</div>
			</div>
		</div>
	</div>
</div>`,
	controller: 'ScoresheetController as scoresheet',
}