/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_3295370174")

  // add field
  collection.fields.addAt(5, new Field({
    "hidden": false,
    "id": "select2834031894",
    "maxSelect": 5,
    "name": "genres",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "select",
    "values": [
      "action",
      "drame",
      "surprise",
      "suspense",
      "horreur"
    ]
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_3295370174")

  // remove field
  collection.fields.removeById("select2834031894")

  return app.save(collection)
})
