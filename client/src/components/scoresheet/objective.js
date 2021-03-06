export default {
  template: `
  <div>{{objective.data.title}}</div>
  <div ng-switch="objective.data.type">
    <enum-objective ng-switch-when="enum" data="objective.data"></enum-objective>
    <yesno-objective ng-switch-when="yesno" data="objective.data"></enum-yesno>
    <number-objective ng-switch-when="number" data="objective.data"></enum-objective>
  </div>`,
  controller: function () { },
  controllerAs: 'objective',
  bindings: { data: '=?' }
}
