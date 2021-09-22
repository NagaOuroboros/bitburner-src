/* tslint:disable:max-line-length completed-docs variable-name*/
import { IMap } from "../types";

export const TerminalHelpText: string[] = [
  "Type 'help name' to learn more about the command ",
  "",
  'alias [-g] [name="value"]            Create or display Terminal aliases',
  "analyze                              Get information about the current machine ",
  "backdoor                             Install a backdoor on the current machine ",
  "buy [-l/program]                     Purchase a program through the Dark Web",
  "cat [file]                           Display a .msg, .lit, or .txt file",
  "cd [dir]                             Change to a new directory",
  "check [script] [args...]             Print a script's logs to Terminal",
  "clear                                Clear all text on the terminal ",
  "cls                                  See 'clear' command ",
  "connect [ip/hostname]                Connects to a remote server",
  "download [script/text file]          Downloads scripts or text files to your computer",
  "expr [math expression]               Evaluate a mathematical expression",
  "free                                 Check the machine's memory (RAM) usage",
  "hack                                 Hack the current machine",
  "help [command]                       Display this help text, or the help text for a command",
  "home                                 Connect to home computer",
  "hostname                             Displays the hostname of the machine",
  "ifconfig                             Displays the IP address of the machine",
  "kill [script/pid] [args...]          Stops the specified script on the current server ",
  "killall                              Stops all running scripts on the current machine",
  "ls [dir] [| grep pattern]            Displays all files on the machine",
  "lscpu                                Displays the number of CPU cores on the machine",
  "mem [script] [-t] [n]                Displays the amount of RAM required to run the script",
  "mv [src] [dest]                      Move/rename a text or script file",
  "nano [file]                          Text editor - Open up and edit a script or text file",
  "ps                                   Display all scripts that are currently running",
  "rm [file]                            Delete a file from the server",
  "run [name] [-t n] [--tail] [args...] Execute a program or script",
  "scan                                 Prints all immediately-available network connections",
  "scan-analyze [d] [-a]                Prints info for all servers up to <i>d</i> nodes away",
  "scp [file] [server]                  Copies a file to a destination server",
  "sudov                                Shows whether you have root access on this computer",
  "tail [script] [args...]              Displays dynamic logs for the specified script",
  "top                                  Displays all running scripts and their RAM usage",
  "unalias [alias name]                 Deletes the specified alias",
  "wget [url] [target file]             Retrieves code/text from a web server",
];

export const HelpTexts: IMap<string[]> = {
  alias: [
    'alias [-g] [name="value"] ',
    " ",
    "Create or display aliases. An alias enables a replacement of a word with another string. ",
    "It can be used to abbreviate a commonly used command, or commonly used parts of a command. The NAME ",
    "of an alias defines the word that will be replaced, while the VALUE defines what it will be replaced by. For example, ",
    "you could create the alias 'nuke' for the Terminal command 'run NUKE.exe' using the following: ",
    " ",
    'alias nuke="run NUKE.exe"',
    " ",
    "Then, to run the NUKE.exe program you would just have to enter 'nuke' in Terminal rather than the full command. ",
    "It is important to note that 'default' aliases will only be substituted for the first word of a Terminal command. For ",
    "example, if the following alias was set: ",
    " ",
    'alias worm="HTTPWorm.exe"',
    " ",
    "and then you tried to run the following terminal command: ",
    " ",
    "run worm",
    " ",
    "This would fail because the worm alias is not the first word of a Terminal command. To allow an alias to be substituted ",
    "anywhere in a Terminal command, rather than just the first word, you must set it to be a global alias using the -g flag: ",
    " ",
    'alias -g worm="HTTPWorm.exe"',
    " ",
    "Now, the 'worm' alias will be substituted anytime it shows up as an individual word in a Terminal command. ",
    " ",
    "Entering just the command 'alias' without any arguments prints the list of all defined aliases in the reusable form ",
    "'alias NAME=VALUE' on the Terminal. ",
    " ",
    "The 'unalias' command can be used to remove aliases.",
    " ",
  ],
  analyze: [
    "analze",
    " ",
    "Prints details and statistics about the current server. The information that is printed includes basic ",
    "server details such as the hostname, whether the player has root access, what ports are opened/closed, and also ",
    "hacking-related information such as an estimated chance to successfully hack, an estimate of how much money is ",
    "available on the server, etc.",
  ],
  backdoor: [
    "backdoor",
    " ",
    "Install a backdoor on the current machine, grants a secret bonus depending on the machine.",
    " ",
    "Requires root access to run.",
    " ",
  ],
  buy: [
    "buy [-l / program]",
    " ",
    "Purchase a program through the Dark Web. Requires a TOR router to use.",
    " ",
    "If this command is ran with the '-l' flag, it will display a list of all programs that can be bought through the ",
    "dark web to the Terminal, as well as their costs.",
    " ",
    "Otherwise, the name of the program must be passed in as a parameter. This name is NOT case-sensitive.",
  ],
  cat: [
    "cat [file]",
    " ",
    "Display message (.msg), literature (.lit), or text (.txt) files. Examples:",
    " ",
    "cat j1.msg",
    " ",
    "cat foo.lit",
    " ",
    "cat servers.txt",
  ],
  cd: [
    "cd [dir]",
    " ",
    "Change to the specified directory. Note that this works even for directories that don't exist. If you ",
    "change to a directory that does not exist, it will not be 'created'. Examples:",
    " ",
    "cd scripts/hacking",
    " ",
    "cd /logs",
    " ",
    "cd ../",
  ],
  check: [
    "check [script name] [args...]",
    " ",
    "Print the logs of the script specified by the script name and arguments to the Terminal. Each argument must be separated by ",
    "a space. Remember that a running script is uniquely ",
    "identified both by its name and the arguments that are used to start it. So, if a script was ran with the following arguments: ",
    " ",
    "run foo.script 1 2 foodnstuff",
    " ",
    "Then to run the 'check' command on this script you would have to pass the same arguments in: ",
    " ",
    "check foo.script 1 2 foodnstuff",
  ],
  clear: [
    "clear",
    " ",
    "Clear the Terminal screen, deleting all of the text. Note that this does not delete the user's command history, so using the up ",
    "and down arrow keys is still valid. Also note that this is permanent and there is no way to undo this. Synonymous with 'cls' command",
  ],
  cls: [
    "cls",
    " ",
    "Clear the Terminal screen, deleting all of the text. Note that this does not delete the user's command history, so using the up ",
    "and down arrow keys is still valid. Also note that this is permanent and there is no way to undo this. Synonymous with 'clear' command",
  ],
  connect: [
    "connect [hostname/ip]",
    " ",
    "Connect to a remote server. The hostname or IP address of the remote server must be given as the argument ",
    "to this command. Note that only servers that are immediately adjacent to the current server in the network can be connected to. To ",
    "see which servers can be connected to, use the 'scan' command.",
  ],
  download: [
    "download [script/text file]",
    " ",
    "Downloads a script or text file to your computer (like your real life computer).",
    " ",
    "You can also download all of your scripts/text files as a zip file using the following Terminal commands:",
    " ",
    "Download all scripts and text files: download *",
    " ",
    "Download all scripts: download *.script",
    " ",
    "Download all text files: download *.txt",
    " ",
  ],
  expr: [
    "expr [mathematical expression]",
    " ",
    "Evaluate a  simple mathematical expression. Supports native JavaScript operators:",
    " ",
    "+, -, /, *, **, %",
    " ",
    "Example:",
    " ",
    "expr 25 * 2 ** 10",
    " ",
    "Note that letters (non-digits) are not allowed and will be removed from the input.",
  ],
  free: [
    "free",
    " ",
    "Display's the memory usage on the current machine. Print the amount of RAM that is available on the current server as well as ",
    "how much of it is being used.",
  ],
  hack: [
    "hack",
    " ",
    "Attempt to hack the current server. Requires root access in order to be run. See the wiki page for hacking mechanics",
    " ",
  ],
  help: [
    "help [command]",
    " ",
    "Display Terminal help information. Without arguments, 'help' prints a list of all valid Terminal commands and a brief ",
    "description of their functionality. You can also pass the name of a Terminal command as an argument to 'help' to print ",
    "more detailed information about the Terminal command. Examples: ",
    " ",
    "help alias",
    " ",
    "help scan-analyze",
  ],
  home: [
    "home" + "Connect to your home computer. This will work no matter what server you are currently connected to.",
  ],
  hostname: ["hostname", " ", "Prints the hostname of the current server"],
  ifconfig: ["ipconfig", " ", "Prints the IP address of the current server"],
  kill: [
    "kill [script name] [args...]",
    " ",
    "kill [pid]",
    " ",
    "Kill the script specified by the script name and arguments OR by its PID.",
    " ",
    "If you are killing the script using its filename and arguments, then each ",
    "argument must be separated by a space. Remember that a running script is ",
    "uniquely identified by both its name and the arguments that are used to start ",
    "it. So, if a script was ran with the following arguments:",
    " ",
    "run foo.script 1 sigma-cosmetics",
    " ",
    "Then to kill this script the same arguments would have to be used:",
    " ",
    "kill foo.script 1 sigma-cosmetics",
    " ",
    "If you are killing the script using its PID, then the PID argument must be numeric",
  ],
  killall: [
    "killall",
    " ",
    "Kills all scripts on the current server. ",
    "Note that after the 'kill' command is issued for a script, it may take a while for the script to actually stop running. ",
    "This will happen if the script is in the middle of a command such as grow() or weaken() that takes time to execute. ",
    "The script will not be stopped/killed until after that time has elapsed.",
  ],
  ls: [
    "ls [dir] [| grep pattern]",
    " ",
    "The ls command, with no arguments, prints all files and directories on the current server's directory to the Terminal screen. ",
    "The files will be displayed in alphabetical order. ",
    " ",
    "The 'dir' optional parameter can be used to display files/directories in another directory.",
    " ",
    "The '| grep pattern' optional parameter can be used to only display files whose filenames match the specified pattern.",
    " ",
    "Examples:",
    " ",
    "List all files with the '.script' extension in the current directory:",
    " ",
    "ls | grep .script",
    " ",
    "List all files with the '.js' extension in the root directory:",
    " ",
    "ls / | grep .js",
    " ",
    "List all files with the word 'purchase' in the filename, in the 'scripts' directory:",
    " ",
    "ls scripts | grep purchase",
  ],
  lscpu: ["lscpu", " ", "Prints the number of CPU Cores the current server has"],

  mem: [
    "mem [script name] [-t num_threads]",
    " ",
    "Displays the amount of RAM needed to run the specified script with a single thread. The command can also be used to print ",
    "the amount of RAM needed to run a script with multiple threads using the '-t' flag. If the '-t' flag is specified, then ",
    "an argument for the number of threads must be passed in afterwards. Examples:",
    " ",
    "mem foo.script",
    " ",
    "mem foo.script -t 50",
    " ",
    "The first example above will print the amount of RAM needed to run 'foo.script' with a single thread. The second example ",
    "above will print the amount of RAM needed to run 'foo.script' with 50 threads.",
  ],
  mv: [
    "mv [src] [dest]",
    " ",
    "Move the source file to the specified destination. This can also be used to rename files. ",
    "This command only works for scripts and text files (.txt). This command CANNOT be used to ",
    "convert to different file types",
    " ",
    "Note that, unlike the Linux 'mv' command, the destination argument must be the ",
    "full filepath. ",
    "Examples: ",
    " ",
    "mv hacking-controller.script scripts/hacking-controller.script",
    " ",
    "mv myScript.js myOldScript.js",
  ],
  nano: [
    "nano [file name]",
    " ",
    "Opens up the specified file in the Text Editor. Only scripts (.script) or text files (.txt) can be ",
    "edited using the Text Editor. If the file does not already exist, then a new, empty one ",
    "will be created",
  ],
  ps: ["ps", " ", "Prints all scripts that are running on the current server"],

  rm: [
    "rm [file]",
    " ",
    "Removes the specified file from the current server. A file can be a script, a program, or a message file. ",
    " ",
    "WARNING: This is permanent and cannot be undone",
  ],
  run: [
    "run [file name] [-t] [num threads] [args...]",
    " ",
    "Execute a program or a script.",
    " ",
    "The '[-t]', '[num threads]', and '[args...]' arguments are only valid when running a script. The '-t' flag is used ",
    "to indicate that the script should be run with the specified number of threads. If the flag is omitted, ",
    "then the script will be run with a single thread by default. ",
    "If the '-t' flag is used, then it MUST come immediately ",
    "after the script name, and the [num threads] argument MUST come immediately afterwards. ",
    " ",
    "[args...] represents a variable number of arguments that will be passed into the script. See the documentation ",
    "about script arguments. Each specified argument must be separated by a space. ",
    " ",
  ],
  scan: [
    "scan",
    " ",
    "Prints all immediately-available network connection. This will print a list of all servers that you can currently connect ",
    "to using the 'connect' Terminal command.",
  ],
  "scan-analyze": [
    "scan-analyze [depth] [-a]",
    " ",
    "Prints detailed information about all servers up to [depth] nodes away on the network. Calling ",
    "'scan-analyze 1' will display information for the same servers that are shown by the 'scan' Terminal ",
    "command. This command also shows the relative paths to reach each server.",
    " ",
    "By default, the maximum depth that can be specified for 'scan-analyze' is 3. However, once you have ",
    "the DeepscanV1.exe and DeepscanV2.exe programs, you can execute 'scan-analyze' with a depth up to ",
    "5 and 10, respectively.",
    " ",
    "The information 'scan-analyze' displays about each server includes whether or not you have root access to it, ",
    "its required hacking level, the number of open ports required to run NUKE.exe on it, and how much RAM ",
    "it has.",
    " ",
    "By default, this command will not display servers that you have purchased. However, you can pass in the ",
    "-a flag at the end of the command if you would like to enable that.",
  ],
  scp: [
    "scp [filename] [target server]",
    " ",
    "Copies the specified file from the current server to the target server. ",
    "This command only works for script files (.script extension), literature files (.lit extension), ",
    "and text files (.txt extension). ",
    "The second argument passed in must be the hostname or IP of the target server.",
  ],
  sudov: ["sudov", " ", "Prints whether or not you have root access to the current machine"],

  tail: [
    "tail [script name] [args...]",
    " ",
    "Displays dynamic logs for the script specified by the script name and arguments. Each argument must be separated ",
    "by a space. Remember that a running script is uniquely identified by both its name and the arguments that were used ",
    "to run it. So, if a script was ran with the following arguments: ",
    " ",
    "run foo.script 10 50000",
    " ",
    "Then in order to check its logs with 'tail' the same arguments must be used: ",
    " ",
    "tail foo.script 10 50000",
  ],
  top: [
    "top",
    " ",
    "Prints a list of all scripts running on the current server as well as their thread count and how much ",
    "RAM they are using in total.",
  ],
  unalias: [
    "unalias [alias name]",
    " ",
    "Deletes the specified alias. Note that the double quotation marks are required. ",
    " ",
    "As an example, if an alias was declared using:",
    " ",
    'alias r="run"',
    " ",
    "Then it could be removed using:",
    " ",
    "unalias r",
    " ",
    "It is not necessary to differentiate between global and non-global aliases when using 'unalias'",
  ],
  wget: [
    "wget [url] [target file]",
    " ",
    "Retrieves data from a URL and downloads it to a file on the current server. The data can only ",
    "be downloaded to a script (.script, .ns, .js) or a text file (.txt). If the file already exists, ",
    "it will be overwritten by this command.",
    " ",
    "Note that it will not be possible to download data from many websites because they do not allow ",
    "cross-origin resource sharing (CORS). Example:",
    " ",
    "wget https://raw.githubusercontent.com/danielyxie/bitburner/master/README.md game_readme.txt",
  ],
};
