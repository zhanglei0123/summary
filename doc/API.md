### MySql巡检

#### 一. 首页

##### 1.1 获取首页信息

请求地址：`/get_count_obj`

请求方式：POST

请求参数：无

返回结果

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| data | Dic | 数据 |
| report_list | List | 数据 |
| task_list | Dic | 数据 |
| result | Boolean | 结果状态 |

`data`字段：

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| db_count | Number | 凭据数 |
| instance_count | Number | 实例数 |
| server_count | Number | 主机数 |
| task_count | Number | 巡检总次数 |

`report_list`字段：

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| id | Number | 报告Id |
| text | String | 报告详情 |

`task_list`字段：

| 参数 | 类型 | 描述 |
| --- | --- | --- |
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

##### 1.2 更新地址

请求地址：`/update_url`

请求方式：POST

请求参数：

| 参数 | 类型 | 必选 | 描述 |
| --- | --- | --- | --- |
| app_path | String | 是 | IP地址 |

返回结果：

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| result | Boolean | 结果状态 |

返回结果示例：

```json

{
    "result": true
}

```

#### 二. 模板管理

##### 2.1 获取模板列表

请求地址：`/get_module_list`

请求方式：POST

请求参数：无

返回结果：

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| data | List | 数据 |
| result | Boolean | 结果状态 |

`data`字段：

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| id | Number | 模板id |
| text | String | 模板名称 |

返回结果示例：

```json

{
    "data": [{
        "id": 1,
        "text": "系统模板"
    }],
    "result": true
}

```

##### 2.2 获取模板详细信息

请求地址：`/get_module_item_list`

请求方式：POST

请求参数：

| 参数 | 类型 | 必选 | 描述 |
| --- | --- | --- | --- |
| module_id | Number | 是 | 模板id |

返回结果：

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| custom_item_list | List | 自定义巡检项信息 |
| data | List | 数据 |
| menu_list | List | 基本信息 |
| result | Boolean | 结果状态 |

`custom_item_list`字段：

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| can_modified | Boolean | 是否可修改 |
| cn_name | String | 数据 |
| compare_way | String | 对比方式 |
| custom_item_id | Number | 自定义巡检项id |
| is_checked | Boolean | 状态 |
| name | String | 巡检字段 |
| value | String | 对比值 |

`data`字段：

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| can_modified | Boolean | 是否可修改 |
| check_item_id | Number | 信息id |
| cn_name | String | 内容 |
| compare_way | String | 对比方式 |
| is_checked | Boolean | 状态 |
| menu_one | String | 一级菜单 |
| menu_two | String | 二级菜单 |
| name | String | 名称 |
| value | String | 值 |

`menu_list`字段：

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| isShow | Boolean | 是否显示 |
| is_checked | Boolean | 状态 |
| menu_one | String | 一级菜单 |
| menu_two | List | 二级菜单 |

返回结果示例：

```json

{
    "custom_item_list": [{
        "can_modified": true,
        "cn_name": "mingcheng",
        "compare_way": "!=",
        "custom_item_id": 2,
        "is_checked": true,
        "name": "ziduan",
        "value": "duibi"
    }],
    "data": [{
        "can_modified": false,
        "check_item_id": 1,
        "cn_name": "主机信息",
        "compare_way": "",
        "is_checked": true,
        "menu_one": "基本信息",
        "menu_two": "主机配置",
        "name": "server_info",
        "value": ""
    }],
    "menu_list": [{
        "isShow": true,
        "is_checked": true,
        "menu_one": "基本信息",
        "menu_two": [{
            "isShow": true,
            "is_checked": true,
            "name": "主机配置"
        }]
    }],
    "result": true
}

```

##### 2.3 创建模板

请求地址：`/create_module`

请求方式：POST

请求参数：

| 参数 | 类型 | 必选 | 描述 |
| --- | --- | --- | --- |
| base_module_id | String | 是 | 模板id |
| check_item_list | List | 是 | 模板详细信息 |
| created_by | String | 是 | 创建人 |
| custom_item_list | List | 是 | 自定义巡检信息 |
| description | String | 是 | 说明 |
| name | String | 是 | 模板名称 |

返回结果：

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| result | Boolean | 结果状态 |

返回结果示例：

```json

{
    "result": false
}

```

##### 2.4 获取模板列表并查询

请求地址：`/search_module_list`

请求方式：POST

请求参数： 

| 参数 | 类型 | 必选 | 描述 |
| --- | --- | --- | --- |
| name | String | 否 | 模板名 |

返回结果：

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| data | List | 数据 |
| result | Boolean | 结果状态 |

`data`字段：

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| base_module_id | Number | 基本模板id |
| created_by | String | 创建者 |
| description | String | 说明 |
| id | Number | 列表id |
| is_build_in | Boolean | 状态 |
| is_deleted | Boolean | 是否删除状态 |
| modified_by | String | 修改人 |
| name | String | 模板名 |
| when_created | String | 创建时间 |
| when_modified | String | 修改时间 |

返回结果示例：

```json

{
    "data": [{
        "base_module_id": 0,
        "created_by": "system",
        "description": "系统内置模板，请勿对其进行修改和删除",
        "id": 1,
        "is_build_in": true,
        "is_deleted": false,
        "modified_by": "",
        "name": "系统模板",
        "when_created": "2019-09-17 12:47:47",
        "when_modified": ""
    }],
    "result": true
}

```

##### 2.5 修改模板

请求地址：`/modify_module`

请求方式：POST

请求参数：

| 参数 | 类型 | 必选 | 描述 |
| --- | --- | --- | --- |
| base_module_id | Number | 是 | 基本模板id |
| check_item_list | List | 是 | 模板信息 |
| created_by | String | 是 | 创建者 |
| custom_item_list | List | 是 | 自定义巡检项信息 |
| description | string | 是 | 说明 |
| id | Number | 是 | 模板id |
| is_build_in | Boolean | 是 | 状态 |
| is_deleted | Boolean | 是 | 删除状态 |
| modified_by | String | 是 | 修改人 |
| name | string | 是 | 模板名 |
| when_created | String | 是 | 创建时间 |
| when_modified | String | 是 | 修改时间 |

返回结果：

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| result | Boolean | 结果状态 |

返回结果示例：

```json

{
    "result": true
}

```

##### 2.6 删除模板

请求地址：`/delete_module`

请求方式：POST

请求参数：

| 参数 | 类型 | 必选 | 描述 |
| --- | --- | --- | --- |
| base_module_id | Number | 是 | 基本模板id |
| created_by | String | 是 | 创建者 |
| description | String | 是 | 说明 |
| id | Number | 是 | 模板id |
| is_build_in | Boolean | 是 | 状态 |
| is_deleted | Boolean | 是 | 删除状态 |
| modified_by | String | 是 | 修改人 |
| name | string | 是 | 模板名 |
| when_created | String | 是 | 创建时间 |
| when_modified | String | 是 | 修改时间 |

返回结果：

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| result | Boolean | 结果状态 |

返回结果示例：

```json

{
    "result": true
}

```

#### 三. 巡检管理

##### 3.1 获取任务列表

请求地址：`get_task_list`

请求方式：POST

请求参数：

| 参数 | 类型 | 必选 | 描述 |
| --- | --- | --- | --- |
| task_name | String | 否 | 任务名称 |
| task_type | String | 否 | 任务类型 |

返回结果：

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| data | List | 数据 |
| result | Boolean | 结果状态 |

`data`字段

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| check_module | Dic | 巡检模板 |
| created_by | String | 创建者 |
| credential | String | ？？ |
| id | Number | 任务id |
| is_deleted | Boolean | 删除状态 |
| name | String | 任务名 |
| receivers | String | ？？ |
| script_account | String | 执行脚本 |
| servers | String | 巡检数据库 |
| time_set | List | 执行时间 |
| type_name | String | 执行类型 |
| when_created | String | 创建时间 |

`check_module`字段：

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| base_module_id | Number | 基本模板id |
| created_by | String | 创建者 |
| description | String | 说明 |
| id | Number | 巡检id |
| is_build_in | Boolean | 状态 |
| is_deleted | Boolean | 删除状态 |
| modified_by | String | 修改人 |
| name | String | 基本模板名 |
| when_created | String | 创建时间 |
| when_modified | String | 修改时间 |

返回结果示例：

```json

{
    "data": [{
        "check_module": {
            "base_module_id": 0,
            "created_by": "system",
            "description": "系统内置模板，请勿对其进行修改和删除",
            "id": 1,
            "is_build_in": true,
            "is_deleted": false,
            "modified_by": "",
            "name": "系统模板",
            "when_created": "2019-05-29 20:11:19",
            "when_modified": ""
        },
        "created_by": "admin",
        "credential": "3",
        "id": 8,
        "is_deleted": false,
        "name": "任务名",
        "receivers": "",
        "script_account": "",
        "servers": "巡检数据库名",
        "time_set": {
            "first_time": "立即",
            "gap": "0",
            "id": 13,
            "is_deleted": false,
            "next_time": "",
            "time_type": "now",
        },
        "type_name": "立即执行",
        "when_created": "2019-10-14 15:00:48"
    }],
    "result": true
}

```

##### 3.2 新增任务获取参数

请求地址：`/get_task_option`

请求方式：POST

请求参数：无

返回结果：

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| db_list | List | 巡检数据库列表 |
| mail_list | List | 接受报告邮箱列表 |
| module_list | List | 巡检模板列表 |
| result | Booiean | 结果状态 |

`db_list`字段：

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| id | Number | 数据库id |
| text | String | 数据库名称 |

`mail_list`字段：

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| id | String | 邮箱id |
| text | String | 邮箱名 |

`module_list`字段：

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| id | Number | 模板id |
| text | String | 模板名 |

返回结果示例：

```json

{
    "db_list": [{
        "id": 1,
        "text": "linuxcheck_saas"
    }],
    "mail_list": [{
        "id": "524396864@qq.com",
        "text": "524396864@qq.com"
    }],
    "module_list": [{
        "id": 1,
        "text": "系统模板"
    }],
    "result": true
}

```

##### 3.3 创建任务

请求地址：`/create_task`

请求方式：POST

请求参数：

| 参数 | 类型 | 必选 | 描述 |
| --- | --- | --- | --- |
| cycleTime | String | 否 | 周期时间 |
| dbList | String | 是 | 巡检数据库id |
| interval | String | 否 | ？？ |
| module_id | String | 是 | 巡检模板id |
| name | String | 是 | 任务名 |
| receivers | String | 否 | ？？ |
| runTime | String | 否 | 定时任务开始时间 |
| script_account | String | 是 | 执行账户 |
| time_type | String | 是 | 执行时间类型 |
 
返回结果：

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| result | Boolean | 结果状态 |

返回结果示例：

```json
{
    "result": true
}

```

##### 3.4 立即执行任务

请求地址：`/run_task_now`

请求方式：POST

请求参数：

| 参数 | 类型 | 必选 | 描述 |
| --- | --- | --- | --- |
| task_id | Number | 是 | 任务id |

返回结果：

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| result | Boolean | 结果状态 |

返回结果示例：

```json
{
    "result": true
}

```

##### 3.5 删除任务

请求地址：`/delete_task`

请求方式：POST

请求参数：

请求参数：

| 参数 | 类型 | 必选 | 描述 |
| --- | --- | --- | --- |
| check_module | Dic | 是 | 巡检模板信息 |
| created_by | String | 是 | 创建者 |
| credential | String | 是 | ？？ |
| description | string | 是 | 说明 |
| id | Number | 是 | 任务id |
| is_deleted | Boolean | 是 | 删除状态 |
| name | String | 是 | 任务名 |
| receivers | String | 是 | ？？ |
| script_account | string | 是 | 执行账户 |
| servers | String | 是 | 巡检数据库名 |
| time_set | List | 是 | 巡检时间 |
| type_name | String | 是 | 巡检时间类型 |
| when_created | String | 是 | 创建时间 |

返回结果：

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| result | Boolean | 结果状态 |

返回结果示例：

```json
{
    "result": true
}

```

##### 3.6 修改任务

请求地址：`/modify_task`

请求方式：POST

请求参数： 

| 参数 | 类型 | 必选 | 描述 |
| --- | --- | --- | --- |
| check_module_id | Number | 是 | 巡检模板id |
| created_by | String | 是 | 创建者 |
| credential | String | 是 | ？？ |
| dbList | String | 是 | 巡检数据库列表 |
| first_time | String | 是 | 巡检时间 |
| gap | String | 是 | ？？ |
| id | Number | 是 | 任务id |
| is_deleted | Boolean | 是 | 删除状态 |
| name | String | 是 | 任务名 |
| next_time | String | 否 | ？？ |
| receivers | String | 否 | ？？ |
| runTime | String | 否 | 定时巡检时间 |
| script_account | String | 是 | 执行账户 |
| time_set_id | Number | 是 | ？？ |
| time_type | String | 是 | 巡检时间类型 |
| when_created | String | 是 | 创建时间 |

返回结果：

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| result | Boolean | 结果状态 |

返回结果示例：

```json
{
    "result": true
}

```

##### 3.7 修改任务时获取任务对象

请求地址：`/get_task_obj`

请求方式：POST

请求参数：

| 参数 | 类型 | 必选 | 描述 |
| --- | --- | --- | --- |
| id | Number | 是 | 任务id |

返回结果：

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| data | Dic | 数据 |
| result | Boolean | 结果状态 |

`data`字段：

| 参数 | 类型 | 必选 | 描述 |
| --- | --- | --- | --- |
| check_module_id | Number | 是 | 巡检模板id |
| created_by | String | 是 | 创建者 |
| credential | String | 是 | ？？ |
| dbList | String | 是 | 巡检数据库列表 |
| first_time | String | 是 | 巡检时间 |
| gap | String | 是 | ？？ |
| id | Number | 是 | 任务id |
| is_deleted | Boolean | 是 | 删除状态 |
| name | String | 是 | 任务名 |
| next_time | String | 否 | ？？ |
| receivers | String | 否 | ？？ |
| runTime | String | 否 | 定时巡检时间 |
| script_account | String | 是 | 执行账户 |
| time_set_id | Number | 是 | ？？ |
| time_type | String | 是 | 巡检时间类型 |
| when_created | String | 是 | 创建时间 |

返回结果示例：

```json
{
    "data": {
        "check_module_id": 1,
        "created_by": "",
        "credential": "3",
        "dbList": "3",
        "first_time": "立即",
        "gap": "0",
        "id": 2,
        "is_deleted": false,
        "name": "系统模板测试",
        "next_time": "",
        "receivers": "",
        "script_account": "root",
        "time_set_id": 2,
        "time_type": "now",
        "when_created": "2019-10-14 14:46:10"
    },
    "result": true
}

```

##### 3.8 获取自定义巡检项列表

请求地址：`/get_item_list`

请求方式：POST

请求参数：
| 参数 | 类型 | 必选 | 描述 |
| --- | --- | --- | --- |
| name | String | 否 | 巡检项名称 |

返回结果：

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| data | List | 数据 |
| result | Boolean | 结果状态 |

`data`字段：

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| cn_name | String | 巡检项名称 |
| compare_value | String | 对比值 |
| compare_way | String | 对比方式 |
| created_by | String | 创建者 |
| description | String | 备注 |
| id | Number | 自定义巡检项id |
| name | String | 巡检字段 |
| script_content | String | 执行脚本 |
| script_type | String | 脚本类型 |
| when_created | String | 创建时间 |
| when_modified | String | 修改时间 |

返回结果示例：

```json

{
    "data": [{
        "cn_name": "巡检项名称",
        "compare_value": "对比值",
        "compare_way": "对比方式",
        "created_by": "",
        "description": "备注",
        "id": 1,
        "name": "巡检字段",
        "script_content": "执行脚本",
        "script_type": "脚本类型",
        "when_created": "创建时间",
        "when_modified": "修改时间",
    }],
    "result": true
}

```

##### 3.9 创建自定义巡检项

请求地址：`/create_custom_item`

请求方式：POST

请求参数：

| 参数 | 类型 | 必选 | 描述 |
| --- | --- | --- | --- |
| cn_name | String | 是 | 巡检项名称 |
| compare_value | String | 是 | 对比值 |
| compare_way | String | 是 | 对比方式 |
| created_by | String | 否 | 创建人 |
| description | String | 否 | 备注 |
| name | String | 是 | 巡检字段 |
| script_content | String | 是 | 执行脚本 |
| script_type | String | 是 | 脚本类型 |
 
 返回结果：

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| result | Boolean | 结果状态 |

返回结果示例：

```json
{
    "result": true
}

```

##### 3.10 删除自定义巡检项

请求地址：`/delete_custom_item`

请求方法：POST

请求参数：

| 参数 | 类型 | 必选 | 描述 |
| --- | --- | --- | --- |
| cn_name | String | 是 | 巡检项名称 |
| compare_value | String | 是 | 对比值 |
| compare_way | String | 是 | 对比方式 |
| created_by | String | 否 | 创建人 |
| description | String | 否 | 备注 |
| id | Number | 是 | 自定义巡检项id |
| name | String | 是 | 巡检字段 |
| script_content | String | 是 | 执行脚本 |
| script_type | String | 是 | 脚本类型 |
| when_created | String | 是 | 创建时间 |
| when_modified | String | 是 | 修改时间 |

返回结果：

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| result | Boolean | 结果状态 |

返回结果示例：

```json
{
    "result": true
}

```

#### 四. 巡检报告

##### 4.1 获取历史报告列表

请求地址：`/get_report_list`

请求方式：POST

请求参数：

| 参数 | 类型 | 必选 | 描述 |
| --- | --- | --- | --- |
| end_time | String | 否 | 结束时间 |
| start_time | String | 否 | 开始时间 |
| task_name | String | 否 | 任务名 |

返回结果：

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| is_checked | Boolean | 结果 |
| data | List | 数据 |
| result | Boolean | 结果状态 |

`data`字段：

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| id | Number | 报告id |
| status | String | 状态 |
| summary | String | 任务概览 |
| task_name | String | 任务名 |
| when_created | String | 创建时间 |

返回结果示例：

```json

{
    "is_checked": false,
    "data": [{
        "id": 8
        "status": "COMPLETE",
        "summary": "本次共巡检2个数据库，完成2个",
        "task_name": "定时任务测试",
        "when_created": "2019-10-15 10:37:36",
    }],
    "result": true
}

```

##### 4.2 巡检报告实例信息

请求地址：`/get_report_detail`

请求方法：POST

请求参数：

| 参数 | 类型 | 必选 | 描述 |
| --- | --- | --- | --- |
| report_id | Number | 是 | 报告id |

返回结果：

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| data | List | 数据 |
| is_error | Boolean | 错误状态 |
| result | Boolean | 结果状态 |

`data`字段：

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| name | String | 任务名称 |
| server_list | List | 数据库信息 |
| when_created | String | 巡检时间 |

`server_list`字段：

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| db_name | String | 数据库凭据 |
| db_servers | List | 数据库信息 |
| is_cluster | Boolean | 状态 |
| summary | String | 巡检概要 |

`db_servers`字段：

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| app_id | Number | 业务id |
| id | Number | 数据库id |
| ip_address | String | 实例IP |
| is_success | Boolean | 状态 |
| result | String | 结果 |
| source | Number | 区域id |

返回结果示例：

```json

{
    "data": {
        "name": "任务名称",
        "server_list": [{
            "db_name": "数据库凭据",
            "db_servers": [{
                "app_id": 2,
                "id": 23,
                "ip_address": "10.77.65.49",
                "is_success": true,
                "result": "执行成功！",
                "source": 0
            }],
            "is_cluster": false,
            "summary": "巡检概要"
        }],
        "when_created": "巡检时间"
    },
    "is_error": false,
    "result": true
}

```

##### 4.3 查看报告详情

请求地址：`/get_db_detail`

请求方式：POST

请求参数：

| 参数 | 类型 | 必选 | 描述 |
| --- | --- | --- | --- |
| db_name | String | 是 | 数据库凭据 |
| db_servers | List | 是 | 数据库信息 |
| is_cluster | Boolean | 是 | 状态 |
| summary | String | 是 | 巡检概要 |

`db_servers`字段：

| 参数 | 类型 | 必选 | 描述 |
| --- | --- | --- | --- |
| app_id | Number | 是 | 业务id |
| id | Number | 是 | 数据库id |
| ip_address | String | 是 | 实例IP |
| is_success | Boolean | 是 | 状态 |
| result | String | 是 | 结果 |
| source | Number | 是 | 区域id |

返回结果：

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| data | List | 数据 |
| db_obj | List | 数据 |
| result | Boolean | 结果状态 |

`data`字段：

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| app_id | Number | 业务id |
| hasError | Boolean | 是否有错误信息 |
| id | Number | 报告id |
| isShow | Boolean | 是否显示 |
| is_success | Boolean | 成功状态 |
| server | Boolean | 实例IP |
| source | Number | 区域id |
| warn_info | List | 警告信息 |

返回结果示例：

```json

{
    "data": [{
        "app_id": 2,
        "hasError": false,
        "id": 2,
        "isShow": false,
        "is_success": true,
        "server": "10.77.65.49",
        "source": 0,
        "warn_info": ["巡检各项正常"] 
    }],
    "db_obj": [],
    "result": true
}

```

##### 4.4 查看实例详情

请求地址：`/get_server_detail`

请求方式：POST

请求参数：

| 参数 | 类型 | 必选 | 描述 |
| --- | --- | --- | --- |
| app_id | Number | 是 | 业务id |
| hasError | Boolean | 是 | 是否有错误信息 |
| id | Number | 是 | 实例id |
| isShow | Boolean | 是 | 是否显示 |
| is_success | Boolean | 是 | 是否成功 |
| server | String | 是 | 实例IP |
| source | Number | 是 | 区域id |
| warn_info | List | 是 | 巡检概要 |

返回结果：

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| data | Dic | 数据 |
| result | Boolean | 结果状态 |

返回结果示例：

```json

{
    "data": {
        "basic_info": {
            "db_info": "",
            "instance_info": [],
            "server_info": {
                "cpu_info": "Intel Core Processor (Broadwell) x 8",  // cpu信息
                "disk_info": "本地磁盘数：2，本地磁盘总量：343.6GB",  // 磁盘信息
                "hostname": "vsjs-bk-paas-2.novalocal",  // 主机名
                "ip_address": "10.77.65.49", // ip地址
                "mem_info": "15.66G",  // 内存大小
                "os": "CentOS release",  // 操作系统
            }
        },
        "custom_info": {
            "item_result": [],
            "summary": [{"text": "未巡检自定义巡检项", "hasError": false}]
        },
        "ip_address": "10.77.65.49",
        "log_info": {
            "log_info": [],
            "summary": [{"text": "错误日志：未巡检该项", "hasError": false}]
        },
        "perf_info": {
            "perf_info": [],
            "sql_info": [],
            "summary": [{"text": "性能状况：未巡检该项", "hasError": false}]
        },
        "run_info": {
            "param_info": [],
            "summary": [{"text": "关键参数：未巡检该项", "hasError": false}]
        },
        "safe_info": {
            "user_info": [],
            "summary": [{"text": "空密码用户：未巡检该项", "hasError": false}]
        }
    },
    "result": true
}

```

#### 五. 系统管理

##### 5.1 获取邮箱列表

请求地址：`/search_mail`

请求方式：POST

请求参数：

| 参数 | 类型 | 必选 | 描述 |
| --- | --- | --- | --- |
| mailbox | String | 否 | 邮箱 |
| username | String | 否 | 用户名 |

返回结果：

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| data | Dic | 数据 |
| result | Boolean | 结果状态 |

`data`字段：

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| account | String | 用户名 |
| when_created | String | 创建时间 |
| id | Number | 邮箱id |
| created_by | String | 创建者 |
| mailbox | String | 邮箱 |

返回结果示例：

```json

{
    "data": {
        "account": "用户名",
        "when_created": "创建时间",
        "id": 1,
        "created_by": "",
        "mailbox": "邮箱"
    },
    "result": true
}

```

##### 5.2 添加邮箱

请求地址：`/add_mail`

请求方法：POST

请求参数：

| 参数 | 类型 | 必选 | 描述 |
| --- | --- | --- | --- |
| account | String | 否 | 用户名 |
| mailbox | String | 是 | 邮箱 |

返回结果：

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| data | Dic | 数据 |
| result | Boolean | 结果状态 |

`data`字段：

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| account | String | 用户名 |
| when_created | String | 创建时间 |
| id | Number | 邮箱id |
| created_by | String | 创建者 |
| mailbox | String | 邮箱 |

返回结果示例：

```json

{
    "data": {
        "account": "用户名",
        "when_created": "创建时间",
        "id": 1,
        "created_by": "",
        "mailbox": "邮箱"
    },
    "result": true
}

```

##### 5.3 修改邮箱

请求地址：`/modify_mail`

请求方法：POST

请求参数：

| 参数 | 类型 | 必选 | 描述 |
| --- | --- | --- | --- |
| id | Number | 是 | 邮箱id |
| account | String | 否 | 用户名 |
| mailbox | String | 是 | 邮箱 |

返回结果：

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| data | Dic | 数据 |
| result | Boolean | 结果状态 |

`data`字段：

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| account | String | 用户名 |
| when_created | String | 创建时间 |
| id | Number | 邮箱id |
| created_by | String | 创建者 |
| mailbox | String | 邮箱 |

返回结果示例：

```json

{
    "data": {
        "account": "用户名",
        "when_created": "创建时间",
        "id": 1,
        "created_by": "",
        "mailbox": "邮箱"
    },
    "result": true
}

```

##### 5.4 删除邮箱

请求地址：`/delete_mail`

请求方式：POST

请求参数：

| 参数 | 类型 | 必选 | 描述 |
| --- | --- | --- | --- |
| id | Number | 是 | 邮箱id |

返回结果：

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| result | Boolean | 结果状态 |

返回结果示例：

```json
{
    "result": true
}

```

##### 5.5 获取操作日志

请求地址：`/search_log`

请求方式：POST

请求参数：

| 参数 | 类型 | 必选 | 描述 |
| --- | --- | --- | --- |
| operateType | String | 否 | 操作类型 |
| operator | String | 否 | 操作人 |
| whenEnd | String | 否 | 结束时间 |
| whenStart | String | 否 | 开始时间 |

返回结果：

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| data | List | 数据 |
| result | Boolean | 结果状态 |

`data`字段：

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| content | String | 操作详情 |
| id | Number | 日志id |
| operated_type | String | 操作类型状态 |
| operator | String | 操作人 |
| when_created | String | 操作时间 |

返回结果示例：

```json

{
    "data": {
        "content": "操作详情",
        "id": 11,
        "operated_type": "操作类型",
        "operator": "操作人",
        "when_created": "操作时间"
    },
    "result": true
}

```


