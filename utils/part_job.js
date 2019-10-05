const job = [{
  id: '19060501',
  title: '商场派单员',
  wage: '90元/天',
  content: '在商场对特定的有孩子的人群进行的传单的分发',
  demand: '热情开朗的优先，要求有一定的抗压能力',
  date: '6月7日到9日三天',
  address: '龙泉驿区万达广场',
  apply: '微信号15983373359'
},
{
  id: '19060502',
  title: '商场派单员',
  wage: '90元/天',
  content: '在商场对特定的有孩子的人群进行的传单的分发',
  demand: '热情开朗的优先，要求有一定的抗压能力',
  date: '6月7日到9日三天',
  address: '龙泉驿区万达广场',
  apply: '微信号15983373359'
},
{
  id: '19060502',
  title: '商场派单员',
  wage: '90元/天',
  content: '在商场对特定的有孩子的人群进行的传单的分发',
  demand: '热情开朗的优先，要求有一定的抗压能力',
  date: '6月7日到9日三天',
  address: '龙泉驿区万达广场',
  apply: '微信号15983373359'
}]

function getJobList() {
  let list = [];
  for (var i = 0; i < job.length; i++) {
    let obj = {};
    obj.id = job[i].id;
    obj.wage = job[i].wage;
    obj.address = job[i].address;
    obj.title = job[i].title;
    list.push(obj);
  }
  return list;
}
/**获取新闻内容 */
function getJobDetail(jobID) {
  let msg = {
    code: '404',
    job: {}
  };
  for (var i = 0; i < job.length; i++) {
    if (jobID == job[i].id) {
      msg.code = '200';
      msg.job = job[i];
      break;
    }
  }
  return msg;
}

module.exports = {
  getJobList: getJobList,
  getJobDetail: getJobDetail
}