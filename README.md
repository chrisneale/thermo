# thermo
Raspberry Pi Thermocouple Monitor

# Collecting data

Add this line to your crontab. This will append a sample to the data file every 5 minutes.

*/5     *     *     *     *         curl -w "\n" http://127.0.0.1:3000/raw >>     /home/pi/thermo-data.json
