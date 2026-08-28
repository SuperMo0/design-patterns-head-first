/**
 * 
 * singletion pattern is used when we want to insure we have only 1 instance of some class
 * for example `thread pool`, `logger`, `app preference`. Also I have seen this pattern used in React alot
 * for example provider likes the query provider, or theme provider are singleton 
 * 
 * 
 *
 * 
 */



class UserSettings{
    private static instance:UserSettings;

    // other class attributes
    private constructor(){

    }
    static  getUserSettings(){
        if(UserSettings.instance== undefined){
            UserSettings.instance=new UserSettings();
        }
        return UserSettings.instance;
    }

    // other class methods
}

UserSettings.getUserSettings();









