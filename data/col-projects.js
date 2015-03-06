conn = new Mongo();
db = connect("localhost/myProjects");

db.projects.drop();
db.projects.insert([
  {
     name:          "Project #1"
    ,description:   "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
    ,owner:         "me"
    ,priority:      10
    ,created:       new Date()
    ,completed:     ""
    ,comments:      []
    ,tasks:         [
       "task number 1"
      ,"task number 2"
      ,"task number 3"
      ,"task number 4"
      ,"task number 5"
    ]
    ,tags: ["tag1","tag2","tag3"]
  },
  {
     name: "Project #2"
    ,description:   "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
    ,owner:         "me"
    ,priority:      9
    ,created:       new Date()
    ,completed:     ""
    ,comments:      []
    ,tasks:         [
       "task number 1"
      ,"task number 2"
      ,"task number 3"
      ,"task number 4"
      ,"task number 5"
    ]
    ,tags: ["tag1"]
  },
  {
     name: "Project #3"
    ,owner:         "me"
    ,description:   "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
    ,priority:      8
    ,created:       new Date()
    ,completed:     ""
    ,comments:      []
    ,tasks:         [
       "task number 1"
      ,"task number 2"
      ,"task number 3"
      ,"task number 4"
      ,"task number 5"
    ]
    ,tags: ["tag3"]
  }
]);
