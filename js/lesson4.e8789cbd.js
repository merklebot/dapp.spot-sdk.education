(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["lesson4"],{"6fce":function(o,n){o.exports=["---\ntitle: Lesson 4. GraphNav service. Mapping and navigating on the map\ncontributors: [LoSk-p, khssnv]\ntranslated: true\n---\n\nIn the fourth lesson you will learn how to record and play autonomous missions with GraphNav service.\n\n## The challenge\n\nThis lesson you can solve the challenge without writing your own Python script.\n\n1. Record a map avioding obstacles. You can use WASD remote control tool. Save your mission in `/home/student/result`.\n2. Move Spot through recorded waypoints. You can use GraphNav service command line tool.\n\n## Theory\n\nThe Spot SDK includes APIs, client libraries, and examples that support the development of autonomous navigation behaviors for the Spot robot. Collectively, this service is referred to as GraphNav. Maps are recorded and saved and later can be replayed with any robot in your fleet. During the map recording process, you can assign actions and API callbacks to waypoints along the map route.\n\nRead [GraphNav Tech Summary](https://dev.bostondynamics.com/docs/concepts/autonomy/graphnav_tech_summary) to learn how it works. [Initialisation](https://dev.bostondynamics.com/docs/concepts/autonomy/initialization) is also important part, it will be usefull in this lesson.\n\n> You can view recorded maps with [View Map](https://github.com/boston-dynamics/spot-sdk/tree/master/python/examples/graph_nav_view_map) example. For that you need to copy the map to your computer:\n> ```bash\n> scp -r student@strelka.ygg.merklebot.com:<path_to_the_map_on_spot> <path_to_the_map_to_download>\n> ```\n> Also you need [install spot packages](https://github.com/boston-dynamics/spot-sdk/blob/master/docs/python/quickstart.md#install-spot-python-packages).\n\nStudy [recording and playing missions](https://github.com/boston-dynamics/spot-sdk/tree/master/python/examples/graph_nav_command_line) examples in order to use it to record the map and playback the mission recorded.\nUse [wasd](https://github.com/boston-dynamics/spot-sdk/tree/master/python/examples/wasd) example to move robot while recording the map.\n\n## Practice\n\n> Ensure you have Yggdrasil Network software running and configured as described in the [Lesson 0](/docs/spot-lesson0). Otherwise you will not have connection to the robot.\n> On macOS you may need to launch Yggdrasil Network in the terminal:\n> ```bash\n> sudo yggdrasil -useconffile /etc/yggdrasil.conf\n> ```\n\n1. Connect to Spot from a terminal or using your development environment remote execution function.\n\n```console\nssh student@strelka.ygg.merklebot.com\n```\n\n2. Develop and demonstrate your solution to the challenge.\n\nWe create [E-Stop endpoint](https://dev.bostondynamics.com/python/examples/estop/readme) for you, so you should not create it.\nFor Spot authentication use username and password from `/home/student/credentials` file.\nSpot address is `192.168.50.3`.\n\nYou can run remote control tool from examples directory.\n\n```console\ncd ~/spot-sdk/python/examples/wasd\npython3 wasd.py --username <SPOT_AUTH_USERNAME> --password <SPOT_AUTH_PASSWORD> <SPOT_ADDRESS>\n```\n\nGraphNav command line tool is located at `~/spot-sdk/python/examples/graph_nav_command_line`.\n"].join("")}}]);
//# sourceMappingURL=lesson4.e8789cbd.js.map