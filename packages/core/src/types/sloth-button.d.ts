export type SlothButtonFileType =
    "application/x-www-form-urlencoded" |
    "multipart/form-data" |
    "text/plain";

export type SlothButtonMethod = "get" | "post";

export type SlothButtonTarget =
    "_blank" |	//Loads the response in a new window/tab
    "_self" |	//Loads the response in the same frame (default)
    "_parent" |	//Loads the response in the parent frame
    "_top" |	//Loads the response in the full body of the window
    "framename";//Loads the response in a named iframe

export type SlothButtonType =
    "button" |
    "submit" |
    "reset";
