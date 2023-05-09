#!/bin/bash
i=1
sleep=2

if [ -z $AWS_TEST_CONNECTION_MAX_RETRIES ]
then
  echo "AWS_TEST_CONNECTION_MAX_RETRIES is empty set default 10"
  AWS_TEST_CONNECTION_MAX_RETRIES=10
fi
if [ ${ENV,,} = local ]
then
  urlSts="http://host.docker.internal:4566"
  echo $urlSts
else
  urlSts="https://sts.eu-central-1.amazonaws.com/"
fi

while [ $i -le $AWS_TEST_CONNECTION_MAX_RETRIES ]
do
    curl --connect-timeout 5 -s $urlSts
    if [ $? -ne 0 ]
    then
        echo "Try $i of $AWS_TEST_CONNECTION_MAX_RETRIES: Error could not connect to sts. Wait $sleep seconds for next."
        i=$((i+1))
        sleep $sleep
    else
        echo "Try $i of $AWS_TEST_CONNECTION_MAX_RETRIES: sts connected"
        exit 0
    fi
done
echo "Error could not connect to sts. Aborting execution..."
exit 1