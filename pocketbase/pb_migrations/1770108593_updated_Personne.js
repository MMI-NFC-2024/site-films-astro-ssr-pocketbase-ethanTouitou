/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_3069637536")

  // add field
  collection.fields.addAt(5, new Field({
    "hidden": false,
    "id": "select2324293680",
    "maxSelect": 2,
    "name": "proffession",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "select",
    "values": [
      "acteur",
      "réalisateur",
      "scénariste",
      "producteur"
    ]
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_3069637536")

  // remove field
  collection.fields.removeById("select2324293680")

  return app.save(collection)
})
