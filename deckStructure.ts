const DIFFICULTY = ['easy', 'medium', 'hard']


export const taskStructure = (S: any) =>
  S.list()
    .title('test')
    .items([
      S.listItem()
        .title('Categories')
        .child(
          S.list()
            .title('Difficulty')
            .items(DIFFICULTY.map(difficulty =>
                S.listItem()
                  .title(`${difficulty}`)
                  .child(
                    S.documentList()
                      .title(`Tasks with difficulty ${difficulty}`)
                      .filter(`difficulty == "${difficulty}"`)
                  )
              )
            )
        ),
      S.listItem().title('All Tasks').child(
        /* Create a list of all posts */
        S.documentList().title('All Tasks').filter('_type == "task"')
      )
    ])


/*
  S.list()
    .title("test")
    .items([
  S.listItem()
    .title('Categories')
    .child(
      S.list()
        .title('Difficulty')
        .items(DIFFICULTY.map(difficulty =>
            S.listItem()
              .title(`${difficulty}`)
              .child(
                S.documentList()
                  .title(`Tasks with difficulty ${difficulty}`)
                  .schemaType('task')
                  .filter(`difficulty == ${difficulty}`)
              )
          )
        )
    )])*/
