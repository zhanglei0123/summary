### MySql巡检

#### 一. 首页

##### 1.1获取首页信息

请求地址： `/get_count_obj`

请求方式： POST

请求参数： 无

返回结果

| 参数 | 类型 | 描述 |
| ------ | ------- | -------- |
| data | List | 数据 |
| report_list | List | 数据 |
| task_list | List | 数据 |
| result | Boolean | 结果状态 |

`data`字段：

| 参数 | 类型   | 描述     |
| ---- | ------ | -------- |
| db_count | Number | 凭据数 |
| instance_count | Number | 实例数 |
| server_count | Number | 主机数 |
| task_count | Number | 巡检总次数 |

`report_list`字段：

| 参数 | 类型   | 描述     |
| ---- | ------ | -------- |
| id | Number | 报告Id |
| text | String | 报告详情 |

`task_list`字段：

| 参数 | 类型   | 描述     |
| ---- | ------ | -------- |
| categories | List | 月数 |
| name | String | 本月巡检次数 |

返回结果示例：

```json

  {
      "data": {
          "db_count": 3,
          "instance_count": 3,
          "server_count": 3,
          "task_count": 4
      },
      "report_list": [{
          "id": 4,
          "text": "2019-10-14 15:05:53 完成了一次巡检"
      }],
      "task_list": {
          "categories": ["11月", "12月", "1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月"],
          "data": [{
              "data": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4],
              "name": "本月巡检次数"
          }]
      },
      "result": true
  }
  
```

#### 更新地址
    请求地址： /update_url
    请求方式： post
    请求参数：?app_path=http:%2F%2F127.0.0.1:8000%2F
    返回结果：
    {
        result: true
    }


## 模板管理

### 新增模板

#### 获取模板列表
    请求地址： /get_module_list
    请求方式： post
    请求参数： {}
    返回结果：
    {
        data: [{
            id: 1
            text: "系统模板"
        }]
        result: true
    }

#### 获取模板详细信息
    请求地址： /get_module_item_list
    请求方式： post
    请求参数： ?module_id=2
    返回结果：
    {
        custom_item_list: [{ // 自定义巡检项信息
            can_modified: true
            cn_name: "mingcheng"
            compare_way: "!="
            custom_item_id: 2
            is_checked: true
            name: "ziduan"
            value: "duibi"
        }]
        data: [{
            can_modified: false
            check_item_id: 1
            cn_name: "主机信息"
            compare_way: ""
            is_checked: true
            menu_one: "基本信息"
            menu_two: "主机配置"
            name: "server_info"
            value: ""
        }]
        menu_list: [{
            isShow: true
            is_checked: true
            menu_one: "基本信息"
            menu_two: [{
                isShow: true
                is_checked: true
                name: "主机配置"
            }, {
                isShow: true
                is_checked: true
                name: "实例信息"
            }]
        }]
        result: true
    }

#### 创建模板
    请求地址： /create_module
    请求方式： post
    请求参数：
    {
        base_module_id: "1"
        check_item_list: [{}]  // 模板详细信息
        created_by: ""
        custom_item_list: [{}]  // 自定义巡检信息
        description: "啊啊啊啊"  // 说明
        name: "测"  // 名字
    }

#### 获取模板列表
    请求地址： /search_module_list
    请求方式： post
    请求参数： 
    {
        name: ""  // 可空 查询用
    }
    返回结果：
    {
        data: [{
            base_module_id: 0
            created_by: "system"
            description: "系统内置模板，请勿对其进行修改和删除"
            id: 1
            is_build_in: true
            is_deleted: false
            modified_by: ""
            name: "系统模板"
            when_created: "2019-09-17 12:47:47"
            when_modified: ""
        }]
        result: true
    }

#### 修改模板
    请求地址：/modify_module
    请求方式： post
    请求参数： 
    {
        base_module_id: 1
        check_item_list: [{}]  // 模板信息
        created_by: ""
        custom_item_list: [{}] // 自定义巡检项信息
        description: "啊啊啊啊"
        id: 3
        is_build_in: false
        is_deleted: false
        modified_by: ""
        name: "测"
        when_created: "2019-10-14 15:39:19"
        when_modified: ""
    }
    返回结果：
    {
        result: true
    }

#### 删除模板
    请求地址： /delete_module
    请求方式： post
    请求参数： 
    {
        base_module_id: 1
        created_by: ""
        description: "啊啊啊啊"
        id: 3
        is_build_in: false
        is_deleted: false
        modified_by: ""
        name: "测"
        when_created: "2019-10-14 15:39:19"
        when_modified: "2019-10-14 15:46:53"
    }
    返回结果：
    {
        result: true
    }

## 巡检管理

###  任务管理

#### 获取任务列表
    请求地址：get_task_list
    请求方式：post
    请求参数：
    {
        task_name: 任务名称
        task_type: 任务类型  //默认00--全部；now--立即；time--定时；cycle--周期
    }
    返回结果：
    {
        data: [{
            check_module: {
                base_module_id: 0
                created_by: "system"
                description: "系统内置模板，请勿对其进行修改和删除"
                id: 1
                is_build_in: true
                is_deleted: false
                modified_by: ""
                name: "系统模板"
                when_created: "2019-05-29 20:11:19"
                when_modified: ""
            }
            created_by: "admin"
            credential: "3"
            id: 8
            is_deleted: false
            name: 任务名
            receivers: 
            script_account: 
            servers: 巡检数据库名
            time_set: {
                first_time: "立即"
                gap: "0"
                id: 13
                is_deleted: false
                next_time: ""
                time_type: "now"
            }
            type_name: 任务类型
            when_created: 创建时间
        }]
        result: true/false
    }

#### 新增任务获取参数
    请求地址：/get_task_option
    请求方式： post
    请求参数：{}
    返回结果：
    {
        db_list: [{  // 巡检数据库列表
            id: 1
            text: "linuxcheck_saas"
        }]
        mail_list: [{  // 接受报告邮箱
            id: "524396864@qq.com"
            text: "524396864@qq.com"
        }]
        module_list: [{  // 巡检模板
            id: 1
            text: "系统模板"
        }]
        result: true
    }

#### 创建任务
    请求地址： /create_task
    请求方式： post
    请求参数： 
    {
        cycleTime: "" // 周期时间
        dbList: "3"  //  巡检数据库id
        interval: ""  // 
        module_id: "2"  // 巡检模板id
        name: "定时任务测试"  //  任务名
        receivers: ""
        runTime: "2019-10-14 15:30"  // 定时任务开始时间
        script_account: "root"  // 执行账户
        time_type: "time"  // 执行时间类型 time--定时 now--立即
    }
    返回结果： 
    {
        result: true/false
    }

#### 立即执行任务
    请求地址： /run_task_now
    请求方式： post
    请求参数： ?task_id=1
    返回结果：
    {
        result: true/false
    }

#### 删除任务
    请求地址： /delete_task
    请求方式： post
    请求参数：
    {
        check_module: {
                base_module_id: 0
                created_by: "system"
                description: "系统内置模板，请勿对其进行修改和删除"
                id: 1
                is_build_in: true
                is_deleted: false
                modified_by: ""
                name: "系统模板"
                when_created: "2019-05-29 20:11:19"
                when_modified: ""
            }
            created_by: "admin"
            credential: "3"
            id: 8
            is_deleted: false
            name: 任务名
            receivers: 
            script_account: 
            servers: 巡检数据库名
            time_set: {
                first_time: "立即"
                gap: "0"
                id: 13
                is_deleted: false
                next_time: ""
                time_type: "now"
            }
            type_name: 任务类型
            when_created: 创建时间
    }
    返回结果：
    {
        result: true/false
    }

#### 修改任务
    请求地址： /modify_task
    请求方式：post
    请求参数： 
    {
        check_module_id: 1
        created_by: ""
        credential: "3"
        dbList: "3"
        first_time: "立即"
        gap: "0"
        id: 2
        is_deleted: false
        name: "系统模板测试"
        next_time: ""
        receivers: ""
        runTime: "2019-10-14 16:00"
        script_account: "root"
        time_set_id: 2
        time_type: "time"
        when_created: "2019-10-14 14:46:10"
    }
    返回结果：
    {
        result: true
    }

#### 修改任务时获取任务对象
    请求地址： /get_task_obj
    请求方式： post
    请求参数：地址栏传参  ?id=2
    返回结果
    {
        data: {
            check_module_id: 1
            created_by: ""
            credential: "3"
            dbList: "3"
            first_time: "立即"
            gap: "0"
            id: 2
            is_deleted: false
            name: "系统模板测试"
            next_time: ""
            receivers: ""
            script_account: "root"
            time_set_id: 2
            time_type: "now"
            when_created: "2019-10-14 14:46:10"
        }
        result: true
    }


### 自定义巡检项
#### 获取自定义巡检项列表
    请求地址：/get_item_list
    请求方式：post
    请求参数：
    {
        name:  巡检项名称  // 默认为空，做查询项
    }
    返回结果：
    {
        data: [{
            cn_name: 巡检项名称
            compare_value: 对比值
            compare_way: 对比方式
            created_by: ""
            description: 备注
            id:
            name: 巡检字段
            script_content: 执行脚本
            script_type: 脚本类型
            when_created: 创建时间
            when_modified: 修改时间
        }]
        result: true
    }

#### 创建自定义巡检项
    请求地址：/create_custom_item
    请求方式：post
    请求参数：
    {
        cn_name: 巡检项名称  //不可空
        compare_value: 对比值  //不可空
        compare_way: 对比方式  // > < = !=
        created_by: ""
        description: 备注
        name: 巡检字段  //不可空
        script_content: 执行脚本 //不可空
        script_type: 脚本类型  //sql  shell
    }
    返回结果：
    {
        result: true
    }

#### 删除自定义巡检项
    请求地址：/delete_custom_item
    请求方法：post
    请求参数：
    {
        cn_name: 巡检项名称
        compare_value: 对比值
        compare_way: 对比方式
        created_by: ""
        description: 备注
        id:
        name: 巡检字段
        script_content: 执行脚本
        script_type: 脚本类型
        when_created: 创建时间
        when_modified: 修改时间
    }
    返回结果：
    {
        result: true/false
    }

## 巡检报告

### 历史报告

#### 获取历史报告列表
    请求地址：/get_report_list
    请求方式：post
    请求参数：
    {
        end_time: 结束时间  //默认今天
        start_time: 开始时间  //默认结束时间往前30天
        task_name: 任务名  //可空
    }
    返回结果：
    {
        is_checked: false,？？
        data: [{
            id: 23
            status: 状态
            summary: 任务概览
            task_name: 任务名称
            when_created: 执行时间
        }],
        result: true
    }

#### 巡检报告实例信息
    请求地址：/get_report_detail
    请求方法：post
    请求参数：?report_id=0 地址栏传参 默认为0即信息为空
    返回结果：
    {
        data: {
            server_list: [{
                db_name: 数据库凭据
                db_servers: [{
                    app_id: 2
                    id: 23
                    ip_address: "10.77.65.49"
                    is_success: true
                    result: "执行成功！"
                    source: 0
                }]
                is_cluster: false
                summary: 巡检概要
            }],
            name: 任务名称,
            when_created: 巡检时间
        }
        is_error: false ？？
        result: true
    }

#### 查看报告详情
    请求地址：/get_db_detail
    请求方式：post
    请求参数：
    {
        db_name: 数据库凭据
        db_servers: [{
            app_id: 2
            id: 23
            ip_address: "10.77.65.49"
            is_success: true
            result: "执行成功！"
            source: 0
        }]
        is_cluster: false
        summary: 巡检概要
    }
    返回结果：
    {
        data: [{
            app_id: 2  // 业务id
            hasError: false
            id: 2
            isShow: false
            is_success: true
            server: "10.77.65.49"  // 实例IP
            source: 0  // 区域id
            warn_info: ["巡检各项正常"] // 巡检概要
        }]
        db_obj: []
        result: true
    }

#### 查看实例详情
    请求地址： /get_server_detail
    请求方式： post
    请求参数： 
    {
        app_id: 2  // 业务id
        hasError: false
        id: 2
        isShow: false
        is_success: true
        server: "10.77.65.49"  // 实例IP
        source: 0  // 区域id
        warn_info: ["巡检各项正常"] // 巡检概要
    }
    返回结果：
    {
        data: {
            basic_info: {  // 基本信息
                db_info: ""
                instance_info: []
                server_info: {
                    cpu_info: "Intel Core Processor (Broadwell) x 8"  // cpu信息
                    disk_info: "本地磁盘数：2，本地磁盘总量：343.6GB"  // 磁盘信息
                    hostname: "vsjs-bk-paas-2.novalocal"  // 主机名
                    ip_address: "10.77.65.49" // ip地址
                    mem_info: "15.66G"  // 内存大小
                    os: "CentOS release"  // 操作系统
                }
            }
            custom_info: {
                item_result: []
                summary: [{{text: "未巡检自定义巡检项", hasError: false}]
            }
            ip_address: "10.77.65.49"
            log_info: {
                log_info: []
                summary: [{text: "错误日志：未巡检该项", hasError: false}]
            }
            perf_info: {
                perf_info: []
                sql_info: []
                summary: [{text: "性能状况：未巡检该项", hasError: false}]
            }
            run_info: {
                param_info: []
                summary: [{text: "关键参数：未巡检该项", hasError: false}]
            }
            safe_info: {
                user_info: []
                summary: [{text: "空密码用户：未巡检该项", hasError: false}]
            }
        }
        result: true
    }

## 系统管理

### 邮箱管理

#### 获取邮箱列表
    请求地址：/search_mail
    请求方式：post
    请求参数：
    {
        mailbox: 邮箱 // 可空，用来查询
        username:  用户名  // 可空，用来查询
    }
    返回结果：
    {
        data: {
            account: 用户名,
            when_created: 创建时间,
            id: 1,
            created_by: ,
            mailbox: 邮箱
        }
        result: true
    }

#### 添加邮箱
    请求地址：/add_mail
    请求方法：post
    请求参数：
    {
        account: 用户名  // 可空
        mailbox: 邮箱 // 格式和唯一性验证
    }
    返回结果：
    {
        data: {
            account: 用户名,
            when_created: 创建时间,
            id: 1,
            created_by: "",
            mailbox: 邮箱
        }
        result: true
    }

#### 修改邮箱
    请求地址：/modify_mail
    请求方法：post
    请求参数：
    {
        id: 1，
        account: 用户名， //可修改为空
        mailbox: 邮箱， //格式和唯一性验证
    }
    返回结果：
    {
        data: {
            account: 用户名,
            when_created: 创建时间,
            id: 1,
            created_by: "",
            mailbox: 邮箱
        }
        result: true
    }

#### 删除邮箱
    请求地址：/delete_mail
    请求方式：post
    请求参数：?id=1  地址栏拼接
    返回结果：
    {
        result: true
    }

### 操作日志
#### 获取操作日志
    请求地址：/search_log
    请求方式：post
    请求参数：
    {
        operateType: 操作类型 // 可空
        operator: 操作人  //可空
        whenEnd: 结束时间 // 默认开始时间往前30天
        whenStart: 开始时间  //默认当前的后一天
    }
    返回结果：
    {
        data: {
            content: 操作详情
            id: 11
            operated_type: 操作类型
            operator: 操作人
            when_created: 操作时间
        }
        result: true
    }


