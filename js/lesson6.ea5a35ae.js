(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["lesson6"],{"2d89":function(n,e){n.exports=["---\ntitle: Troubleshooting\ncontributors: [LoSk-p]\ntranslated: true\n---\n\n### Admin socket already exists \n\nIf you can't run yggdrasil with this error:\n```bash\nAdmin socket /var/run/yggdrasil.sock already exists and is in use by another process\n```\nTry to remove file yggdrasil.sock and run it again:\n```bash\nsudo rm /var/run/yggdrasil.sock\n```\n\n### Can't get lease\n\nIf you can't get lease with this error:\n```python\nGeneric exception during check-in:\nNo lease for resource \"body\"\n    (resuming check-in)\n```\nOr this error:\n```python\nGeneric exception during check-in:\nbosdyn.api.RetainLeaseResponse (LeaseUseError): \n    (resuming check-in)\n```\n\nYou need to acquire lease (if you have already done it, try again):\n```python\nlease = lease_client.acquire()\n```\n"].join("")}}]);
//# sourceMappingURL=lesson6.ea5a35ae.js.map