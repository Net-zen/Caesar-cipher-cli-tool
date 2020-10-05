# Caesar cipher CLI tool

## Run app

1. Clone repository

        git clone git@github.com:Net-zen/Caesar-cipher-cli-tool.git
        
2. Go to directory

        cd caesar-cipher-cli-tool

3. Install dependencies

        npm install
        
4. Go to app directory

        cd caesar-cipher-cli

5. To run script

        node cipher -a encode -s -7 
        node cipher --action encode --shift -3 --output output.txt
        node cipher --action decode --shift 7 --input "./input.txt" --output "output.txt"
        node cipher --action encode --shift 28 --input "C:\input.txt" --output "./output.txt"

##Options

|  alias | full name  |       description       |
| -------| ---------- | ----------------------- |
| -a     | --action   | action (encode/decode)*|
| -s     | --shift    | shift*                 |
| -i     | --input    | input file           |
| -o     | --output   | output file          |


*Required
