(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["lesson5"],{c483:function(n,o){n.exports=['---\ntitle: Lesson 5. Robot service. Camera calibration and "Spot check" procedure\ncontributors: [LoSk-p]\ntranslated: true\n---\n\nIn this lesson you will learn what should you do if you just got the robot: the first run and network setup. Also you will learn how to run the calibration process that should be run monthly.\n\n## The challenge\n\nCreate and execute Python script implements behaviors described.\n\n1. Run "spot check" and save the result of the calibration in a `/home/student/result` directory as a text file.\n2. Run camera calibration procedure.\n\n## Theory\n\n### First Run\n\nLook at [Startup Procedure](https://support.bostondynamics.com/s/article/Startup-Procedure) page in Documentation.\n\n### Networking\n\nSpot offers a variety of networking options to support a diverse set of applications and environments. Options include:\n\n* Spot as a connected peer. Physicall connection to Spot.\n\n* Spot as a WiFi access point. \n\n* Spot as a WiFi client. Spot can join an existing WiFi network, and applications can also join the same WiFi network to talk to Spot.\n\nFor more information look at [Networking page](https://dev.bostondynamics.com/docs/concepts/networking).\n\nSpot Core is connected to the Spot via payload port. Spot Core can be connected to the Internet with Wi-Fi dongle. The setup instructions you can find at [Spot Core Cockpit](https://dev.bostondynamics.com/docs/payload/spot_core_cockpit.html?highlight=spot%20check) page.\n\n### Calibration\n\nSpot Check is a full calibration of the robot. Also you can run the camera calibration \n\n* [run_spot_check](https://github.com/boston-dynamics/spot-sdk/blob/master/python/bosdyn-client/src/bosdyn/client/spot_check.py#L164) runs full spot check routine. The robot should be sitting on flat ground when this routine is started. This routine calibrates robot joints and checks camera health.\n\n* [run_camera_calibration](https://github.com/boston-dynamics/spot-sdk/blob/master/python/bosdyn-client/src/bosdyn/client/spot_check.py#L204). Run full camera calibration routine for robot. This function blocks until calibration has completed. This function should be called once the robot is powered on and standing with his back to the calibration stand at a distance of 1 meter. Calibation process takes about 20 minutes.\n\n## Practice\n\n> Ensure you have Yggdrasil Network software running and configured as described in the [Lesson 0](/docs/spot-lesson0). Otherwise you will not have connection to the robot.\n> On macOS you may need to launch Yggdrasil Network in the terminal:\n> ```bash\n> sudo yggdrasil -useconffile /etc/yggdrasil.conf\n> ```\n\n1. Connect to Spot from a terminal or using your development environment remote execution function.\n\n```console\nssh student@strelka.ygg.merklebot.com\n```\n\n2. Develop and demonstrate your solution to the challenge.\n\nWe create [E-Stop endpoint](https://dev.bostondynamics.com/python/examples/estop/readme) for you, so you should not create it.\nFor Spot authentication use username and password from `/home/student/credentials` file.\nSpot address is `192.168.50.3`.\n'].join("")}}]);
//# sourceMappingURL=lesson5.6f1af978.js.map