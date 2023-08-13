import { Category, ICategory, CategoryPlayerType, CategoryType } from "./Categories/Category";
import { CategoryManager } from "./Categories/CategoryManager";
import { SpeedrunAPIClient as Client } from "./Client";
import { IDeveloper } from "./Developers/Developer";
import { IEngine } from "./Engines/Engine";
import { IBulkGame, IGame } from "./Games/Game";
import { IGameType } from "./Games/Types/GameType";
import { IGenre } from "./Genres/Genre";
import { Guest, IGuest } from "./Guests/Guest";
import { GuestManager } from "./Guests/GuestManager";
import { Leaderboard, ILeaderboard } from "./Leaderboards/Leaderboard";
import { ILevel } from "./Levels/Level";
import { INotification } from "./Notifications/Notification";
import { IPlatform } from "./Platforms/Platform";
import { IPublisher } from "./Publishers/Publisher";
import { IRegion } from "./Regions/Region";
import { IPlayer, IRun, IRunPlace, Run, RunStatus, RunTime } from "./Runs/Run";
import { IGetRunsQuery, IPostRunData, IRunVariable, RunManager, RunVariableType } from "./Runs/RunManager";
import { ISeries } from "./Series/Series";
import { IUser } from "./Users/User";
import { IVariable, IVariableValue, Variable } from "./Variables/Variable";
import { VariableManager } from "./Variables/VariableManager";

export {
    /**
     * Classes
     */
    Category,
    CategoryManager,
    Client,
    Guest,
    GuestManager,
    Leaderboard,
    Run,
    RunManager,
    Variable,
    VariableManager,

    /**
     * Interfaces
     */
    IBulkGame,
    ICategory,
    IDeveloper,
    IEngine,
    IGame,
    IGameType,
    IGenre,
    IGuest,
    ILeaderboard,
    ILevel,
    INotification,
    IPlatform,
    IPlayer,
    IPublisher,
    IRegion,
    IRun,
    IRunPlace,
    IRunVariable,
    ISeries,
    IUser,
    IVariable,
    IVariableValue,

    /**
     * Enums
     */
    CategoryType,
    CategoryPlayerType,
    RunStatus,
    RunTime,
    RunVariableType,

    /**
     * Manager Options
     */
    IGetRunsQuery,
    IPostRunData,
};