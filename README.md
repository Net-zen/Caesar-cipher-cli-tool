# Caesar cipher CLI tool

## Run app

1. Install dependencies

        npm install
        
2. Go to app directory

        cd caesar-cipher-cli

2. To run script

        node cipher -a encode -s -7 
        node cipher --action encode --shift 7 --output encoded.txt
        node cipher --action decode --shift 7 --input decoded.txt --output plain.txt
