/*global Meteor, Assets, Evaluations, Tags*/

Meteor.startup(function() {

  Evaluations._ensureIndex({'id': 1});
  
  loadData();
});

function loadData() {
  // load the evaluation data into mongodb
  var evaluation = JSON.parse(Assets.getText('evaluations.json'));

  // TODO: check the version of data to populate into database only when version is not match
  Evaluations.remove({});
  evaluation.data.forEach((v, i) => {
    // the evaluation has sequence so insert them as steps(ids)
    v.id = (i + 1).toString();
    Evaluations.insert(v);
  });

  var tag = JSON.parse(Assets.getText('tags.json'));
  Tags.remove({});
  tag.data.forEach(v => {
    Tags.insert(v);
  });
}
