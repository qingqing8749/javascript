/**
 * Created by liubin on 2017/4/8.
 */
$(function(){
    var initialData = {
        "Nodes": [
            {
                "Guid": "8fcbebd4-7f85-4043-acc0-05859f8dece9",
                "CreateUser": "0003                          ",
                "CreateDateTime": "/Date(1456882860000+0800)/",
                "LastUpdateUser": "0003                          ",
                "LastUpdateDateTime": "/Date(1456882860000+0800)/",
                "Code": "BranchEnd8",
                "NodeType": 2,
                "NodeMode": 1,
                "GroupGuid": "00000000-0000-0000-0000-000000000000",
                "SubMode": 0,
                "OrderNo": 0,
                "Description": "",
                "Version": 0,
                "JumpMode": 0,
                "RemarkMode": 0,
                "AllowCustomExecutor": false,
                "AllowCustomCC": false,
                "AllowNextExecutor": false,
                "NextExecutorIsRequired": false,
                "CurrExecutorIsRequired": false,
                "ExecutorWhere1": 0,
                "ExecutorWhere2": 0,
                "AllowCustomCCEmail": false,
                "AllowRevoke": false,
                "AllowBatchCancel": false,
                "AllowBatchOK": false,
                "AllowPriority": false,
                "AllowCustomRollback": false,
                "AllowNextCC": false,
                "NextCCIsRequired": false,
                "CustomCCIsRequired": false,
                "Style": "left: 0px; top: 0px;",
                "Main": {
                    "Guid": "a6b3bb43-99bb-4aa2-b51a-00e062d70531",
                    "CreateUser": "167                           ",
                    "CreateDateTime": "/Date(1398085122000+0800)/",
                    "LastUpdateUser": "0003                          ",
                    "LastUpdateDateTime": "/Date(1476005103000+0800)/",
                    "Code": "CopyTest",
                    "ViewNamePrefix": null,
                    "MainTable": null,
                    "SubFlow": false,
                    "Internal": null,
                    "Priority": 3,
                    "Category": "Performance",
                    "RunMode": 0,
                    "Enable": true,
                    "BatchApproval": false,
                    "BatchRefuse": true,
                    "AttachementType": 1,
                    "Version": null,
                    "TimeOut": null,
                    "AgencyMode": null,
                    "Description": "test",
                    "DialogWidth": null,
                    "DialogHeight": null,
                    "IconFileName": null,
                    "LargeIconFileName": null,
                    "RollbackFlowGuid": "00000000-0000-0000-0000-000000000000",
                    "UpdateFlowGuid": null,
                    "ExtendProperties": null,
                    "HasAttachement": true,
                    "UseFlowPrint": false,
                    "CommitNotAlertSuccess": false,
                    "GoBackNotAlertSuccess": false,
                    "MenuID": "aa",
                    "BeginNodeIsAutoPost": false,
                    "IsRepeatLaunch": false,
                    "RepeatLaunchTimeInterval": 0,
                    "OtherJson": "{\"CloseFlowEmail\": \"7e96b211-8050-422b-85cb-594f0bba8b8e\",\"NoApprovedEmail\":\"1fa86ea4-498f-44a1-ba6f-8d60048943d1\",\"AppUrl\":\"Leave/AppLeave/Application\",\"AddAppUrl\":\"Leave/AppLeave/Application4\",\"IsCalculateApprover\":\"0\",\"PostRemarkRequired\":\"0\",\"GoBackRemarkRequired\":\"0\",\"RefusedRemarkRequired\":\"0\",\"NotQuery\":\"0\",\"CustomFormXMLPath\":\"\",\"ShowOneStaffView\":\"0\"}",
                    "RevokeType": 0,
                    "Name": {
                        "English": "CopyTest",
                        "Chinese": "CopyTest",
                        "Language1": "CopyTest",
                        "Language2": "CopyTest",
                        "Language3": "CopyTest"
                    },
                    "Other": {
                        "CloseFlowEmail": "7e96b211-8050-422b-85cb-594f0bba8b8e",
                        "NoApprovedEmail": "1fa86ea4-498f-44a1-ba6f-8d60048943d1",
                        "AppUrl": "Leave/AppLeave/Application",
                        "AddAppUrl": "Leave/AppLeave/Application4",
                        "IsCalculateApprover": "0",
                        "PostRemarkRequired": "0",
                        "GoBackRemarkRequired": "0",
                        "RefusedRemarkRequired": "0",
                        "NotQuery": "0",
                        "CustomFormXMLPath": "",
                        "ShowOneStaffView": "0"
                    },
                    "ShouldLog": true
                },
                "Name": {
                    "English": "BranchEnd8",
                    "Chinese": "分支结束8",
                    "Language1": "",
                    "Language2": "",
                    "Language3": ""
                },
                "RemarkLabel": {
                    "English": "",
                    "Chinese": "",
                    "Language1": "",
                    "Language2": "",
                    "Language3": ""
                },
                "ShouldLog": true
            },
            {
                "Guid": "b5a84849-3553-4d52-9cdf-175bd1d21348",
                "CreateUser": "0003                          ",
                "CreateDateTime": "/Date(1456882860000+0800)/",
                "LastUpdateUser": "0003                          ",
                "LastUpdateDateTime": "/Date(1456882860000+0800)/",
                "Code": "BranchBegin8",
                "NodeType": 1,
                "NodeMode": 1,
                "GroupGuid": "00000000-0000-0000-0000-000000000000",
                "SubMode": 0,
                "OrderNo": 0,
                "Description": "",
                "Version": 0,
                "JumpMode": 0,
                "RemarkMode": 0,
                "AllowCustomExecutor": false,
                "AllowCustomCC": false,
                "AllowNextExecutor": false,
                "NextExecutorIsRequired": false,
                "CurrExecutorIsRequired": false,
                "ExecutorWhere1": 0,
                "ExecutorWhere2": 0,
                "AllowCustomCCEmail": false,
                "AllowRevoke": false,
                "AllowBatchCancel": false,
                "AllowBatchOK": false,
                "AllowPriority": false,
                "AllowCustomRollback": false,
                "AllowNextCC": false,
                "NextCCIsRequired": false,
                "CustomCCIsRequired": false,
                "Style": "left: 0px; top: 0px;",
                "Main": {
                    "Guid": "a6b3bb43-99bb-4aa2-b51a-00e062d70531",
                    "CreateUser": "167                           ",
                    "CreateDateTime": "/Date(1398085122000+0800)/",
                    "LastUpdateUser": "0003                          ",
                    "LastUpdateDateTime": "/Date(1476005103000+0800)/",
                    "Code": "CopyTest",
                    "ViewNamePrefix": null,
                    "MainTable": null,
                    "SubFlow": false,
                    "Internal": null,
                    "Priority": 3,
                    "Category": "Performance",
                    "RunMode": 0,
                    "Enable": true,
                    "BatchApproval": false,
                    "BatchRefuse": true,
                    "AttachementType": 1,
                    "Version": null,
                    "TimeOut": null,
                    "AgencyMode": null,
                    "Description": "test",
                    "DialogWidth": null,
                    "DialogHeight": null,
                    "IconFileName": null,
                    "LargeIconFileName": null,
                    "RollbackFlowGuid": "00000000-0000-0000-0000-000000000000",
                    "UpdateFlowGuid": null,
                    "ExtendProperties": null,
                    "HasAttachement": true,
                    "UseFlowPrint": false,
                    "CommitNotAlertSuccess": false,
                    "GoBackNotAlertSuccess": false,
                    "MenuID": "aa",
                    "BeginNodeIsAutoPost": false,
                    "IsRepeatLaunch": false,
                    "RepeatLaunchTimeInterval": 0,
                    "OtherJson": "{\"CloseFlowEmail\": \"7e96b211-8050-422b-85cb-594f0bba8b8e\",\"NoApprovedEmail\":\"1fa86ea4-498f-44a1-ba6f-8d60048943d1\",\"AppUrl\":\"Leave/AppLeave/Application\",\"AddAppUrl\":\"Leave/AppLeave/Application4\",\"IsCalculateApprover\":\"0\",\"PostRemarkRequired\":\"0\",\"GoBackRemarkRequired\":\"0\",\"RefusedRemarkRequired\":\"0\",\"NotQuery\":\"0\",\"CustomFormXMLPath\":\"\",\"ShowOneStaffView\":\"0\"}",
                    "RevokeType": 0,
                    "Name": {
                        "English": "CopyTest",
                        "Chinese": "CopyTest",
                        "Language1": "CopyTest",
                        "Language2": "CopyTest",
                        "Language3": "CopyTest"
                    },
                    "Other": {
                        "CloseFlowEmail": "7e96b211-8050-422b-85cb-594f0bba8b8e",
                        "NoApprovedEmail": "1fa86ea4-498f-44a1-ba6f-8d60048943d1",
                        "AppUrl": "Leave/AppLeave/Application",
                        "AddAppUrl": "Leave/AppLeave/Application4",
                        "IsCalculateApprover": "0",
                        "PostRemarkRequired": "0",
                        "GoBackRemarkRequired": "0",
                        "RefusedRemarkRequired": "0",
                        "NotQuery": "0",
                        "CustomFormXMLPath": "",
                        "ShowOneStaffView": "0"
                    },
                    "ShouldLog": true
                },
                "Name": {
                    "English": "BranchBegin8",
                    "Chinese": "分支开始8",
                    "Language1": "",
                    "Language2": "",
                    "Language3": ""
                },
                "RemarkLabel": {
                    "English": "",
                    "Chinese": "",
                    "Language1": "",
                    "Language2": "",
                    "Language3": ""
                },
                "ShouldLog": true
            },
            {
                "Guid": "040ca436-25b4-492a-8b9a-215ffa31160f",
                "CreateUser": "0003                          ",
                "CreateDateTime": "/Date(1411438329000+0800)/",
                "LastUpdateUser": "0003                          ",
                "LastUpdateDateTime": "/Date(1423033854000+0800)/",
                "Code": "Node623",
                "NodeType": 0,
                "NodeMode": 0,
                "GroupGuid": "00000000-0000-0000-0000-000000000000",
                "SubMode": 0,
                "OrderNo": 0,
                "Description": null,
                "Version": 0,
                "JumpMode": 0,
                "RemarkMode": 0,
                "AllowCustomExecutor": false,
                "AllowCustomCC": false,
                "AllowNextExecutor": null,
                "NextExecutorIsRequired": null,
                "CurrExecutorIsRequired": false,
                "ExecutorWhere1": 0,
                "ExecutorWhere2": 0,
                "AllowCustomCCEmail": false,
                "AllowRevoke": false,
                "AllowBatchCancel": false,
                "AllowBatchOK": false,
                "AllowPriority": false,
                "AllowCustomRollback": false,
                "AllowNextCC": null,
                "NextCCIsRequired": null,
                "CustomCCIsRequired": null,
                "Style": "left: 154px; top: -2px;",
                "Main": {
                    "Guid": "a6b3bb43-99bb-4aa2-b51a-00e062d70531",
                    "CreateUser": "167                           ",
                    "CreateDateTime": "/Date(1398085122000+0800)/",
                    "LastUpdateUser": "0003                          ",
                    "LastUpdateDateTime": "/Date(1476005103000+0800)/",
                    "Code": "CopyTest",
                    "ViewNamePrefix": null,
                    "MainTable": null,
                    "SubFlow": false,
                    "Internal": null,
                    "Priority": 3,
                    "Category": "Performance",
                    "RunMode": 0,
                    "Enable": true,
                    "BatchApproval": false,
                    "BatchRefuse": true,
                    "AttachementType": 1,
                    "Version": null,
                    "TimeOut": null,
                    "AgencyMode": null,
                    "Description": "test",
                    "DialogWidth": null,
                    "DialogHeight": null,
                    "IconFileName": null,
                    "LargeIconFileName": null,
                    "RollbackFlowGuid": "00000000-0000-0000-0000-000000000000",
                    "UpdateFlowGuid": null,
                    "ExtendProperties": null,
                    "HasAttachement": true,
                    "UseFlowPrint": false,
                    "CommitNotAlertSuccess": false,
                    "GoBackNotAlertSuccess": false,
                    "MenuID": "aa",
                    "BeginNodeIsAutoPost": false,
                    "IsRepeatLaunch": false,
                    "RepeatLaunchTimeInterval": 0,
                    "OtherJson": "{\"CloseFlowEmail\": \"7e96b211-8050-422b-85cb-594f0bba8b8e\",\"NoApprovedEmail\":\"1fa86ea4-498f-44a1-ba6f-8d60048943d1\",\"AppUrl\":\"Leave/AppLeave/Application\",\"AddAppUrl\":\"Leave/AppLeave/Application4\",\"IsCalculateApprover\":\"0\",\"PostRemarkRequired\":\"0\",\"GoBackRemarkRequired\":\"0\",\"RefusedRemarkRequired\":\"0\",\"NotQuery\":\"0\",\"CustomFormXMLPath\":\"\",\"ShowOneStaffView\":\"0\"}",
                    "RevokeType": 0,
                    "Name": {
                        "English": "CopyTest",
                        "Chinese": "CopyTest",
                        "Language1": "CopyTest",
                        "Language2": "CopyTest",
                        "Language3": "CopyTest"
                    },
                    "Other": {
                        "CloseFlowEmail": "7e96b211-8050-422b-85cb-594f0bba8b8e",
                        "NoApprovedEmail": "1fa86ea4-498f-44a1-ba6f-8d60048943d1",
                        "AppUrl": "Leave/AppLeave/Application",
                        "AddAppUrl": "Leave/AppLeave/Application4",
                        "IsCalculateApprover": "0",
                        "PostRemarkRequired": "0",
                        "GoBackRemarkRequired": "0",
                        "RefusedRemarkRequired": "0",
                        "NotQuery": "0",
                        "CustomFormXMLPath": "",
                        "ShowOneStaffView": "0"
                    },
                    "ShouldLog": true
                },
                "Name": {
                    "English": "1",
                    "Chinese": "11",
                    "Language1": "",
                    "Language2": "",
                    "Language3": ""
                },
                "RemarkLabel": null,
                "ShouldLog": true
            },
            {
                "Guid": "9e947819-cbf3-4752-845c-4574fc979679",
                "CreateUser": "0003                          ",
                "CreateDateTime": "/Date(1491549542000+0800)/",
                "LastUpdateUser": "0003                          ",
                "LastUpdateDateTime": "/Date(1491549542000+0800)/",
                "Code": "BranchBegin13",
                "NodeType": 1,
                "NodeMode": 1,
                "GroupGuid": "00000000-0000-0000-0000-000000000000",
                "SubMode": 0,
                "OrderNo": 0,
                "Description": "",
                "Version": 0,
                "JumpMode": 0,
                "RemarkMode": 0,
                "AllowCustomExecutor": false,
                "AllowCustomCC": false,
                "AllowNextExecutor": false,
                "NextExecutorIsRequired": false,
                "CurrExecutorIsRequired": false,
                "ExecutorWhere1": 0,
                "ExecutorWhere2": 0,
                "AllowCustomCCEmail": false,
                "AllowRevoke": false,
                "AllowBatchCancel": false,
                "AllowBatchOK": false,
                "AllowPriority": false,
                "AllowCustomRollback": false,
                "AllowNextCC": false,
                "NextCCIsRequired": false,
                "CustomCCIsRequired": false,
                "Style": "",
                "Main": {
                    "Guid": "a6b3bb43-99bb-4aa2-b51a-00e062d70531",
                    "CreateUser": "167                           ",
                    "CreateDateTime": "/Date(1398085122000+0800)/",
                    "LastUpdateUser": "0003                          ",
                    "LastUpdateDateTime": "/Date(1476005103000+0800)/",
                    "Code": "CopyTest",
                    "ViewNamePrefix": null,
                    "MainTable": null,
                    "SubFlow": false,
                    "Internal": null,
                    "Priority": 3,
                    "Category": "Performance",
                    "RunMode": 0,
                    "Enable": true,
                    "BatchApproval": false,
                    "BatchRefuse": true,
                    "AttachementType": 1,
                    "Version": null,
                    "TimeOut": null,
                    "AgencyMode": null,
                    "Description": "test",
                    "DialogWidth": null,
                    "DialogHeight": null,
                    "IconFileName": null,
                    "LargeIconFileName": null,
                    "RollbackFlowGuid": "00000000-0000-0000-0000-000000000000",
                    "UpdateFlowGuid": null,
                    "ExtendProperties": null,
                    "HasAttachement": true,
                    "UseFlowPrint": false,
                    "CommitNotAlertSuccess": false,
                    "GoBackNotAlertSuccess": false,
                    "MenuID": "aa",
                    "BeginNodeIsAutoPost": false,
                    "IsRepeatLaunch": false,
                    "RepeatLaunchTimeInterval": 0,
                    "OtherJson": "{\"CloseFlowEmail\": \"7e96b211-8050-422b-85cb-594f0bba8b8e\",\"NoApprovedEmail\":\"1fa86ea4-498f-44a1-ba6f-8d60048943d1\",\"AppUrl\":\"Leave/AppLeave/Application\",\"AddAppUrl\":\"Leave/AppLeave/Application4\",\"IsCalculateApprover\":\"0\",\"PostRemarkRequired\":\"0\",\"GoBackRemarkRequired\":\"0\",\"RefusedRemarkRequired\":\"0\",\"NotQuery\":\"0\",\"CustomFormXMLPath\":\"\",\"ShowOneStaffView\":\"0\"}",
                    "RevokeType": 0,
                    "Name": {
                        "English": "CopyTest",
                        "Chinese": "CopyTest",
                        "Language1": "CopyTest",
                        "Language2": "CopyTest",
                        "Language3": "CopyTest"
                    },
                    "Other": {
                        "CloseFlowEmail": "7e96b211-8050-422b-85cb-594f0bba8b8e",
                        "NoApprovedEmail": "1fa86ea4-498f-44a1-ba6f-8d60048943d1",
                        "AppUrl": "Leave/AppLeave/Application",
                        "AddAppUrl": "Leave/AppLeave/Application4",
                        "IsCalculateApprover": "0",
                        "PostRemarkRequired": "0",
                        "GoBackRemarkRequired": "0",
                        "RefusedRemarkRequired": "0",
                        "NotQuery": "0",
                        "CustomFormXMLPath": "",
                        "ShowOneStaffView": "0"
                    },
                    "ShouldLog": true
                },
                "Name": {
                    "English": "BranchBegin13",
                    "Chinese": "分支开始13",
                    "Language1": "",
                    "Language2": "",
                    "Language3": ""
                },
                "RemarkLabel": {
                    "English": "",
                    "Chinese": "",
                    "Language1": "",
                    "Language2": "",
                    "Language3": ""
                },
                "ShouldLog": true
            },
            {
                "Guid": "39bab209-acb7-4cba-a8b1-6e6cdda19e76",
                "CreateUser": "0003                          ",
                "CreateDateTime": "/Date(1466389357000+0800)/",
                "LastUpdateUser": "0003                          ",
                "LastUpdateDateTime": "/Date(1466389357000+0800)/",
                "Code": "BranchBegin11",
                "NodeType": 1,
                "NodeMode": 1,
                "GroupGuid": "00000000-0000-0000-0000-000000000000",
                "SubMode": 0,
                "OrderNo": 0,
                "Description": "",
                "Version": 0,
                "JumpMode": 0,
                "RemarkMode": 0,
                "AllowCustomExecutor": false,
                "AllowCustomCC": false,
                "AllowNextExecutor": false,
                "NextExecutorIsRequired": false,
                "CurrExecutorIsRequired": false,
                "ExecutorWhere1": 0,
                "ExecutorWhere2": 0,
                "AllowCustomCCEmail": false,
                "AllowRevoke": false,
                "AllowBatchCancel": false,
                "AllowBatchOK": false,
                "AllowPriority": false,
                "AllowCustomRollback": false,
                "AllowNextCC": false,
                "NextCCIsRequired": false,
                "CustomCCIsRequired": false,
                "Style": "",
                "Main": {
                    "Guid": "a6b3bb43-99bb-4aa2-b51a-00e062d70531",
                    "CreateUser": "167                           ",
                    "CreateDateTime": "/Date(1398085122000+0800)/",
                    "LastUpdateUser": "0003                          ",
                    "LastUpdateDateTime": "/Date(1476005103000+0800)/",
                    "Code": "CopyTest",
                    "ViewNamePrefix": null,
                    "MainTable": null,
                    "SubFlow": false,
                    "Internal": null,
                    "Priority": 3,
                    "Category": "Performance",
                    "RunMode": 0,
                    "Enable": true,
                    "BatchApproval": false,
                    "BatchRefuse": true,
                    "AttachementType": 1,
                    "Version": null,
                    "TimeOut": null,
                    "AgencyMode": null,
                    "Description": "test",
                    "DialogWidth": null,
                    "DialogHeight": null,
                    "IconFileName": null,
                    "LargeIconFileName": null,
                    "RollbackFlowGuid": "00000000-0000-0000-0000-000000000000",
                    "UpdateFlowGuid": null,
                    "ExtendProperties": null,
                    "HasAttachement": true,
                    "UseFlowPrint": false,
                    "CommitNotAlertSuccess": false,
                    "GoBackNotAlertSuccess": false,
                    "MenuID": "aa",
                    "BeginNodeIsAutoPost": false,
                    "IsRepeatLaunch": false,
                    "RepeatLaunchTimeInterval": 0,
                    "OtherJson": "{\"CloseFlowEmail\": \"7e96b211-8050-422b-85cb-594f0bba8b8e\",\"NoApprovedEmail\":\"1fa86ea4-498f-44a1-ba6f-8d60048943d1\",\"AppUrl\":\"Leave/AppLeave/Application\",\"AddAppUrl\":\"Leave/AppLeave/Application4\",\"IsCalculateApprover\":\"0\",\"PostRemarkRequired\":\"0\",\"GoBackRemarkRequired\":\"0\",\"RefusedRemarkRequired\":\"0\",\"NotQuery\":\"0\",\"CustomFormXMLPath\":\"\",\"ShowOneStaffView\":\"0\"}",
                    "RevokeType": 0,
                    "Name": {
                        "English": "CopyTest",
                        "Chinese": "CopyTest",
                        "Language1": "CopyTest",
                        "Language2": "CopyTest",
                        "Language3": "CopyTest"
                    },
                    "Other": {
                        "CloseFlowEmail": "7e96b211-8050-422b-85cb-594f0bba8b8e",
                        "NoApprovedEmail": "1fa86ea4-498f-44a1-ba6f-8d60048943d1",
                        "AppUrl": "Leave/AppLeave/Application",
                        "AddAppUrl": "Leave/AppLeave/Application4",
                        "IsCalculateApprover": "0",
                        "PostRemarkRequired": "0",
                        "GoBackRemarkRequired": "0",
                        "RefusedRemarkRequired": "0",
                        "NotQuery": "0",
                        "CustomFormXMLPath": "",
                        "ShowOneStaffView": "0"
                    },
                    "ShouldLog": true
                },
                "Name": {
                    "English": "BranchBegin11",
                    "Chinese": "分支开始11",
                    "Language1": "",
                    "Language2": "",
                    "Language3": ""
                },
                "RemarkLabel": {
                    "English": "",
                    "Chinese": "",
                    "Language1": "",
                    "Language2": "",
                    "Language3": ""
                },
                "ShouldLog": true
            },
            {
                "Guid": "94ad1fcc-15e9-4749-aacb-762435255a94",
                "CreateUser": "0003                          ",
                "CreateDateTime": "/Date(1446516142000+0800)/",
                "LastUpdateUser": "0003                          ",
                "LastUpdateDateTime": "/Date(1446516142000+0800)/",
                "Code": "Node7",
                "NodeType": 0,
                "NodeMode": 1,
                "GroupGuid": "00000000-0000-0000-0000-000000000000",
                "SubMode": 0,
                "OrderNo": 0,
                "Description": "",
                "Version": 0,
                "JumpMode": 0,
                "RemarkMode": 0,
                "AllowCustomExecutor": false,
                "AllowCustomCC": false,
                "AllowNextExecutor": false,
                "NextExecutorIsRequired": false,
                "CurrExecutorIsRequired": false,
                "ExecutorWhere1": 0,
                "ExecutorWhere2": 0,
                "AllowCustomCCEmail": false,
                "AllowRevoke": false,
                "AllowBatchCancel": false,
                "AllowBatchOK": false,
                "AllowPriority": false,
                "AllowCustomRollback": false,
                "AllowNextCC": null,
                "NextCCIsRequired": null,
                "CustomCCIsRequired": null,
                "Style": "left: 0px; top: 0px;",
                "Main": {
                    "Guid": "a6b3bb43-99bb-4aa2-b51a-00e062d70531",
                    "CreateUser": "167                           ",
                    "CreateDateTime": "/Date(1398085122000+0800)/",
                    "LastUpdateUser": "0003                          ",
                    "LastUpdateDateTime": "/Date(1476005103000+0800)/",
                    "Code": "CopyTest",
                    "ViewNamePrefix": null,
                    "MainTable": null,
                    "SubFlow": false,
                    "Internal": null,
                    "Priority": 3,
                    "Category": "Performance",
                    "RunMode": 0,
                    "Enable": true,
                    "BatchApproval": false,
                    "BatchRefuse": true,
                    "AttachementType": 1,
                    "Version": null,
                    "TimeOut": null,
                    "AgencyMode": null,
                    "Description": "test",
                    "DialogWidth": null,
                    "DialogHeight": null,
                    "IconFileName": null,
                    "LargeIconFileName": null,
                    "RollbackFlowGuid": "00000000-0000-0000-0000-000000000000",
                    "UpdateFlowGuid": null,
                    "ExtendProperties": null,
                    "HasAttachement": true,
                    "UseFlowPrint": false,
                    "CommitNotAlertSuccess": false,
                    "GoBackNotAlertSuccess": false,
                    "MenuID": "aa",
                    "BeginNodeIsAutoPost": false,
                    "IsRepeatLaunch": false,
                    "RepeatLaunchTimeInterval": 0,
                    "OtherJson": "{\"CloseFlowEmail\": \"7e96b211-8050-422b-85cb-594f0bba8b8e\",\"NoApprovedEmail\":\"1fa86ea4-498f-44a1-ba6f-8d60048943d1\",\"AppUrl\":\"Leave/AppLeave/Application\",\"AddAppUrl\":\"Leave/AppLeave/Application4\",\"IsCalculateApprover\":\"0\",\"PostRemarkRequired\":\"0\",\"GoBackRemarkRequired\":\"0\",\"RefusedRemarkRequired\":\"0\",\"NotQuery\":\"0\",\"CustomFormXMLPath\":\"\",\"ShowOneStaffView\":\"0\"}",
                    "RevokeType": 0,
                    "Name": {
                        "English": "CopyTest",
                        "Chinese": "CopyTest",
                        "Language1": "CopyTest",
                        "Language2": "CopyTest",
                        "Language3": "CopyTest"
                    },
                    "Other": {
                        "CloseFlowEmail": "7e96b211-8050-422b-85cb-594f0bba8b8e",
                        "NoApprovedEmail": "1fa86ea4-498f-44a1-ba6f-8d60048943d1",
                        "AppUrl": "Leave/AppLeave/Application",
                        "AddAppUrl": "Leave/AppLeave/Application4",
                        "IsCalculateApprover": "0",
                        "PostRemarkRequired": "0",
                        "GoBackRemarkRequired": "0",
                        "RefusedRemarkRequired": "0",
                        "NotQuery": "0",
                        "CustomFormXMLPath": "",
                        "ShowOneStaffView": "0"
                    },
                    "ShouldLog": true
                },
                "Name": {
                    "English": "",
                    "Chinese": "Node7",
                    "Language1": "",
                    "Language2": "",
                    "Language3": ""
                },
                "RemarkLabel": {
                    "English": "",
                    "Chinese": "",
                    "Language1": "",
                    "Language2": "",
                    "Language3": ""
                },
                "ShouldLog": true
            },
            {
                "Guid": "dfab9d20-7ef5-460e-bf3e-79d2f9941ff3",
                "CreateUser": "167                           ",
                "CreateDateTime": "/Date(1398085122000+0800)/",
                "LastUpdateUser": "0003                          ",
                "LastUpdateDateTime": "/Date(1422613467000+0800)/",
                "Code": "Begin",
                "NodeType": 0,
                "NodeMode": 0,
                "GroupGuid": "00000000-0000-0000-0000-000000000000",
                "SubMode": 0,
                "OrderNo": 0,
                "Description": null,
                "Version": 0,
                "JumpMode": 0,
                "RemarkMode": 0,
                "AllowCustomExecutor": false,
                "AllowCustomCC": false,
                "AllowNextExecutor": null,
                "NextExecutorIsRequired": null,
                "CurrExecutorIsRequired": false,
                "ExecutorWhere1": 0,
                "ExecutorWhere2": 0,
                "AllowCustomCCEmail": false,
                "AllowRevoke": false,
                "AllowBatchCancel": false,
                "AllowBatchOK": false,
                "AllowPriority": false,
                "AllowCustomRollback": false,
                "AllowNextCC": null,
                "NextCCIsRequired": null,
                "CustomCCIsRequired": null,
                "Style": "left: 176px; top: 57px;",
                "Main": {
                    "Guid": "a6b3bb43-99bb-4aa2-b51a-00e062d70531",
                    "CreateUser": "167                           ",
                    "CreateDateTime": "/Date(1398085122000+0800)/",
                    "LastUpdateUser": "0003                          ",
                    "LastUpdateDateTime": "/Date(1476005103000+0800)/",
                    "Code": "CopyTest",
                    "ViewNamePrefix": null,
                    "MainTable": null,
                    "SubFlow": false,
                    "Internal": null,
                    "Priority": 3,
                    "Category": "Performance",
                    "RunMode": 0,
                    "Enable": true,
                    "BatchApproval": false,
                    "BatchRefuse": true,
                    "AttachementType": 1,
                    "Version": null,
                    "TimeOut": null,
                    "AgencyMode": null,
                    "Description": "test",
                    "DialogWidth": null,
                    "DialogHeight": null,
                    "IconFileName": null,
                    "LargeIconFileName": null,
                    "RollbackFlowGuid": "00000000-0000-0000-0000-000000000000",
                    "UpdateFlowGuid": null,
                    "ExtendProperties": null,
                    "HasAttachement": true,
                    "UseFlowPrint": false,
                    "CommitNotAlertSuccess": false,
                    "GoBackNotAlertSuccess": false,
                    "MenuID": "aa",
                    "BeginNodeIsAutoPost": false,
                    "IsRepeatLaunch": false,
                    "RepeatLaunchTimeInterval": 0,
                    "OtherJson": "{\"CloseFlowEmail\": \"7e96b211-8050-422b-85cb-594f0bba8b8e\",\"NoApprovedEmail\":\"1fa86ea4-498f-44a1-ba6f-8d60048943d1\",\"AppUrl\":\"Leave/AppLeave/Application\",\"AddAppUrl\":\"Leave/AppLeave/Application4\",\"IsCalculateApprover\":\"0\",\"PostRemarkRequired\":\"0\",\"GoBackRemarkRequired\":\"0\",\"RefusedRemarkRequired\":\"0\",\"NotQuery\":\"0\",\"CustomFormXMLPath\":\"\",\"ShowOneStaffView\":\"0\"}",
                    "RevokeType": 0,
                    "Name": {
                        "English": "CopyTest",
                        "Chinese": "CopyTest",
                        "Language1": "CopyTest",
                        "Language2": "CopyTest",
                        "Language3": "CopyTest"
                    },
                    "Other": {
                        "CloseFlowEmail": "7e96b211-8050-422b-85cb-594f0bba8b8e",
                        "NoApprovedEmail": "1fa86ea4-498f-44a1-ba6f-8d60048943d1",
                        "AppUrl": "Leave/AppLeave/Application",
                        "AddAppUrl": "Leave/AppLeave/Application4",
                        "IsCalculateApprover": "0",
                        "PostRemarkRequired": "0",
                        "GoBackRemarkRequired": "0",
                        "RefusedRemarkRequired": "0",
                        "NotQuery": "0",
                        "CustomFormXMLPath": "",
                        "ShowOneStaffView": "0"
                    },
                    "ShouldLog": true
                },
                "Name": {
                    "English": "",
                    "Chinese": "开始节点1",
                    "Language1": "",
                    "Language2": "",
                    "Language3": ""
                },
                "RemarkLabel": null,
                "ShouldLog": true
            },
            {
                "Guid": "8dee5766-effb-4cf8-9dcb-9c183f5e266d",
                "CreateUser": "0003                          ",
                "CreateDateTime": "/Date(1441504771000+0800)/",
                "LastUpdateUser": "0003                          ",
                "LastUpdateDateTime": "/Date(1441504771000+0800)/",
                "Code": "Node6",
                "NodeType": 0,
                "NodeMode": 1,
                "GroupGuid": "00000000-0000-0000-0000-000000000000",
                "SubMode": 0,
                "OrderNo": 0,
                "Description": "",
                "Version": 0,
                "JumpMode": 0,
                "RemarkMode": 0,
                "AllowCustomExecutor": false,
                "AllowCustomCC": false,
                "AllowNextExecutor": false,
                "NextExecutorIsRequired": null,
                "CurrExecutorIsRequired": false,
                "ExecutorWhere1": 0,
                "ExecutorWhere2": 0,
                "AllowCustomCCEmail": false,
                "AllowRevoke": false,
                "AllowBatchCancel": false,
                "AllowBatchOK": false,
                "AllowPriority": false,
                "AllowCustomRollback": false,
                "AllowNextCC": null,
                "NextCCIsRequired": null,
                "CustomCCIsRequired": null,
                "Style": "left: 0px; top: 0px;",
                "Main": {
                    "Guid": "a6b3bb43-99bb-4aa2-b51a-00e062d70531",
                    "CreateUser": "167                           ",
                    "CreateDateTime": "/Date(1398085122000+0800)/",
                    "LastUpdateUser": "0003                          ",
                    "LastUpdateDateTime": "/Date(1476005103000+0800)/",
                    "Code": "CopyTest",
                    "ViewNamePrefix": null,
                    "MainTable": null,
                    "SubFlow": false,
                    "Internal": null,
                    "Priority": 3,
                    "Category": "Performance",
                    "RunMode": 0,
                    "Enable": true,
                    "BatchApproval": false,
                    "BatchRefuse": true,
                    "AttachementType": 1,
                    "Version": null,
                    "TimeOut": null,
                    "AgencyMode": null,
                    "Description": "test",
                    "DialogWidth": null,
                    "DialogHeight": null,
                    "IconFileName": null,
                    "LargeIconFileName": null,
                    "RollbackFlowGuid": "00000000-0000-0000-0000-000000000000",
                    "UpdateFlowGuid": null,
                    "ExtendProperties": null,
                    "HasAttachement": true,
                    "UseFlowPrint": false,
                    "CommitNotAlertSuccess": false,
                    "GoBackNotAlertSuccess": false,
                    "MenuID": "aa",
                    "BeginNodeIsAutoPost": false,
                    "IsRepeatLaunch": false,
                    "RepeatLaunchTimeInterval": 0,
                    "OtherJson": "{\"CloseFlowEmail\": \"7e96b211-8050-422b-85cb-594f0bba8b8e\",\"NoApprovedEmail\":\"1fa86ea4-498f-44a1-ba6f-8d60048943d1\",\"AppUrl\":\"Leave/AppLeave/Application\",\"AddAppUrl\":\"Leave/AppLeave/Application4\",\"IsCalculateApprover\":\"0\",\"PostRemarkRequired\":\"0\",\"GoBackRemarkRequired\":\"0\",\"RefusedRemarkRequired\":\"0\",\"NotQuery\":\"0\",\"CustomFormXMLPath\":\"\",\"ShowOneStaffView\":\"0\"}",
                    "RevokeType": 0,
                    "Name": {
                        "English": "CopyTest",
                        "Chinese": "CopyTest",
                        "Language1": "CopyTest",
                        "Language2": "CopyTest",
                        "Language3": "CopyTest"
                    },
                    "Other": {
                        "CloseFlowEmail": "7e96b211-8050-422b-85cb-594f0bba8b8e",
                        "NoApprovedEmail": "1fa86ea4-498f-44a1-ba6f-8d60048943d1",
                        "AppUrl": "Leave/AppLeave/Application",
                        "AddAppUrl": "Leave/AppLeave/Application4",
                        "IsCalculateApprover": "0",
                        "PostRemarkRequired": "0",
                        "GoBackRemarkRequired": "0",
                        "RefusedRemarkRequired": "0",
                        "NotQuery": "0",
                        "CustomFormXMLPath": "",
                        "ShowOneStaffView": "0"
                    },
                    "ShouldLog": true
                },
                "Name": {
                    "English": "",
                    "Chinese": "Node6",
                    "Language1": "",
                    "Language2": "",
                    "Language3": ""
                },
                "RemarkLabel": {
                    "English": "",
                    "Chinese": "",
                    "Language1": "",
                    "Language2": "",
                    "Language3": ""
                },
                "ShouldLog": true
            },
            {
                "Guid": "3920a97c-cf9e-4ed6-97e5-a661949886f4",
                "CreateUser": "0003                          ",
                "CreateDateTime": "/Date(1466389357000+0800)/",
                "LastUpdateUser": "0003                          ",
                "LastUpdateDateTime": "/Date(1466389357000+0800)/",
                "Code": "BranchEnd11",
                "NodeType": 2,
                "NodeMode": 1,
                "GroupGuid": "00000000-0000-0000-0000-000000000000",
                "SubMode": 0,
                "OrderNo": 0,
                "Description": "",
                "Version": 0,
                "JumpMode": 0,
                "RemarkMode": 0,
                "AllowCustomExecutor": false,
                "AllowCustomCC": false,
                "AllowNextExecutor": false,
                "NextExecutorIsRequired": false,
                "CurrExecutorIsRequired": false,
                "ExecutorWhere1": 0,
                "ExecutorWhere2": 0,
                "AllowCustomCCEmail": false,
                "AllowRevoke": false,
                "AllowBatchCancel": false,
                "AllowBatchOK": false,
                "AllowPriority": false,
                "AllowCustomRollback": false,
                "AllowNextCC": false,
                "NextCCIsRequired": false,
                "CustomCCIsRequired": false,
                "Style": "",
                "Main": {
                    "Guid": "a6b3bb43-99bb-4aa2-b51a-00e062d70531",
                    "CreateUser": "167                           ",
                    "CreateDateTime": "/Date(1398085122000+0800)/",
                    "LastUpdateUser": "0003                          ",
                    "LastUpdateDateTime": "/Date(1476005103000+0800)/",
                    "Code": "CopyTest",
                    "ViewNamePrefix": null,
                    "MainTable": null,
                    "SubFlow": false,
                    "Internal": null,
                    "Priority": 3,
                    "Category": "Performance",
                    "RunMode": 0,
                    "Enable": true,
                    "BatchApproval": false,
                    "BatchRefuse": true,
                    "AttachementType": 1,
                    "Version": null,
                    "TimeOut": null,
                    "AgencyMode": null,
                    "Description": "test",
                    "DialogWidth": null,
                    "DialogHeight": null,
                    "IconFileName": null,
                    "LargeIconFileName": null,
                    "RollbackFlowGuid": "00000000-0000-0000-0000-000000000000",
                    "UpdateFlowGuid": null,
                    "ExtendProperties": null,
                    "HasAttachement": true,
                    "UseFlowPrint": false,
                    "CommitNotAlertSuccess": false,
                    "GoBackNotAlertSuccess": false,
                    "MenuID": "aa",
                    "BeginNodeIsAutoPost": false,
                    "IsRepeatLaunch": false,
                    "RepeatLaunchTimeInterval": 0,
                    "OtherJson": "{\"CloseFlowEmail\": \"7e96b211-8050-422b-85cb-594f0bba8b8e\",\"NoApprovedEmail\":\"1fa86ea4-498f-44a1-ba6f-8d60048943d1\",\"AppUrl\":\"Leave/AppLeave/Application\",\"AddAppUrl\":\"Leave/AppLeave/Application4\",\"IsCalculateApprover\":\"0\",\"PostRemarkRequired\":\"0\",\"GoBackRemarkRequired\":\"0\",\"RefusedRemarkRequired\":\"0\",\"NotQuery\":\"0\",\"CustomFormXMLPath\":\"\",\"ShowOneStaffView\":\"0\"}",
                    "RevokeType": 0,
                    "Name": {
                        "English": "CopyTest",
                        "Chinese": "CopyTest",
                        "Language1": "CopyTest",
                        "Language2": "CopyTest",
                        "Language3": "CopyTest"
                    },
                    "Other": {
                        "CloseFlowEmail": "7e96b211-8050-422b-85cb-594f0bba8b8e",
                        "NoApprovedEmail": "1fa86ea4-498f-44a1-ba6f-8d60048943d1",
                        "AppUrl": "Leave/AppLeave/Application",
                        "AddAppUrl": "Leave/AppLeave/Application4",
                        "IsCalculateApprover": "0",
                        "PostRemarkRequired": "0",
                        "GoBackRemarkRequired": "0",
                        "RefusedRemarkRequired": "0",
                        "NotQuery": "0",
                        "CustomFormXMLPath": "",
                        "ShowOneStaffView": "0"
                    },
                    "ShouldLog": true
                },
                "Name": {
                    "English": "BranchEnd11",
                    "Chinese": "分支结束11",
                    "Language1": "",
                    "Language2": "",
                    "Language3": ""
                },
                "RemarkLabel": {
                    "English": "",
                    "Chinese": "",
                    "Language1": "",
                    "Language2": "",
                    "Language3": ""
                },
                "ShouldLog": true
            },
            {
                "Guid": "cc2b961b-229e-41be-95ee-acb1153c5091",
                "CreateUser": "167                           ",
                "CreateDateTime": "/Date(1398085122000+0800)/",
                "LastUpdateUser": "                              ",
                "LastUpdateDateTime": "/Date(1398085122000+0800)/",
                "Code": "结束",
                "NodeType": 0,
                "NodeMode": 10,
                "GroupGuid": "00000000-0000-0000-0000-000000000000",
                "SubMode": 0,
                "OrderNo": 4,
                "Description": null,
                "Version": 0,
                "JumpMode": 0,
                "RemarkMode": 0,
                "AllowCustomExecutor": false,
                "AllowCustomCC": false,
                "AllowNextExecutor": null,
                "NextExecutorIsRequired": null,
                "CurrExecutorIsRequired": false,
                "ExecutorWhere1": 0,
                "ExecutorWhere2": 0,
                "AllowCustomCCEmail": false,
                "AllowRevoke": false,
                "AllowBatchCancel": false,
                "AllowBatchOK": false,
                "AllowPriority": false,
                "AllowCustomRollback": false,
                "AllowNextCC": null,
                "NextCCIsRequired": null,
                "CustomCCIsRequired": null,
                "Style": "left: 1059px; top: 316px;",
                "Main": {
                    "Guid": "a6b3bb43-99bb-4aa2-b51a-00e062d70531",
                    "CreateUser": "167                           ",
                    "CreateDateTime": "/Date(1398085122000+0800)/",
                    "LastUpdateUser": "0003                          ",
                    "LastUpdateDateTime": "/Date(1476005103000+0800)/",
                    "Code": "CopyTest",
                    "ViewNamePrefix": null,
                    "MainTable": null,
                    "SubFlow": false,
                    "Internal": null,
                    "Priority": 3,
                    "Category": "Performance",
                    "RunMode": 0,
                    "Enable": true,
                    "BatchApproval": false,
                    "BatchRefuse": true,
                    "AttachementType": 1,
                    "Version": null,
                    "TimeOut": null,
                    "AgencyMode": null,
                    "Description": "test",
                    "DialogWidth": null,
                    "DialogHeight": null,
                    "IconFileName": null,
                    "LargeIconFileName": null,
                    "RollbackFlowGuid": "00000000-0000-0000-0000-000000000000",
                    "UpdateFlowGuid": null,
                    "ExtendProperties": null,
                    "HasAttachement": true,
                    "UseFlowPrint": false,
                    "CommitNotAlertSuccess": false,
                    "GoBackNotAlertSuccess": false,
                    "MenuID": "aa",
                    "BeginNodeIsAutoPost": false,
                    "IsRepeatLaunch": false,
                    "RepeatLaunchTimeInterval": 0,
                    "OtherJson": "{\"CloseFlowEmail\": \"7e96b211-8050-422b-85cb-594f0bba8b8e\",\"NoApprovedEmail\":\"1fa86ea4-498f-44a1-ba6f-8d60048943d1\",\"AppUrl\":\"Leave/AppLeave/Application\",\"AddAppUrl\":\"Leave/AppLeave/Application4\",\"IsCalculateApprover\":\"0\",\"PostRemarkRequired\":\"0\",\"GoBackRemarkRequired\":\"0\",\"RefusedRemarkRequired\":\"0\",\"NotQuery\":\"0\",\"CustomFormXMLPath\":\"\",\"ShowOneStaffView\":\"0\"}",
                    "RevokeType": 0,
                    "Name": {
                        "English": "CopyTest",
                        "Chinese": "CopyTest",
                        "Language1": "CopyTest",
                        "Language2": "CopyTest",
                        "Language3": "CopyTest"
                    },
                    "Other": {
                        "CloseFlowEmail": "7e96b211-8050-422b-85cb-594f0bba8b8e",
                        "NoApprovedEmail": "1fa86ea4-498f-44a1-ba6f-8d60048943d1",
                        "AppUrl": "Leave/AppLeave/Application",
                        "AddAppUrl": "Leave/AppLeave/Application4",
                        "IsCalculateApprover": "0",
                        "PostRemarkRequired": "0",
                        "GoBackRemarkRequired": "0",
                        "RefusedRemarkRequired": "0",
                        "NotQuery": "0",
                        "CustomFormXMLPath": "",
                        "ShowOneStaffView": "0"
                    },
                    "ShouldLog": true
                },
                "Name": {
                    "English": "",
                    "Chinese": "结束",
                    "Language1": "",
                    "Language2": "",
                    "Language3": ""
                },
                "RemarkLabel": null,
                "ShouldLog": true
            },
            {
                "Guid": "a726c8af-ea8e-426c-a650-c713c00d3ad5",
                "CreateUser": "167                           ",
                "CreateDateTime": "/Date(1398085122000+0800)/",
                "LastUpdateUser": "                              ",
                "LastUpdateDateTime": "/Date(1398085122000+0800)/",
                "Code": "部门经理审批",
                "NodeType": 0,
                "NodeMode": 1,
                "GroupGuid": "00000000-0000-0000-0000-000000000000",
                "SubMode": 0,
                "OrderNo": 2,
                "Description": null,
                "Version": 0,
                "JumpMode": 0,
                "RemarkMode": 0,
                "AllowCustomExecutor": false,
                "AllowCustomCC": false,
                "AllowNextExecutor": null,
                "NextExecutorIsRequired": null,
                "CurrExecutorIsRequired": false,
                "ExecutorWhere1": 0,
                "ExecutorWhere2": 0,
                "AllowCustomCCEmail": false,
                "AllowRevoke": true,
                "AllowBatchCancel": false,
                "AllowBatchOK": false,
                "AllowPriority": false,
                "AllowCustomRollback": false,
                "AllowNextCC": null,
                "NextCCIsRequired": null,
                "CustomCCIsRequired": null,
                "Style": "left: 745px; top: 198px;",
                "Main": {
                    "Guid": "a6b3bb43-99bb-4aa2-b51a-00e062d70531",
                    "CreateUser": "167                           ",
                    "CreateDateTime": "/Date(1398085122000+0800)/",
                    "LastUpdateUser": "0003                          ",
                    "LastUpdateDateTime": "/Date(1476005103000+0800)/",
                    "Code": "CopyTest",
                    "ViewNamePrefix": null,
                    "MainTable": null,
                    "SubFlow": false,
                    "Internal": null,
                    "Priority": 3,
                    "Category": "Performance",
                    "RunMode": 0,
                    "Enable": true,
                    "BatchApproval": false,
                    "BatchRefuse": true,
                    "AttachementType": 1,
                    "Version": null,
                    "TimeOut": null,
                    "AgencyMode": null,
                    "Description": "test",
                    "DialogWidth": null,
                    "DialogHeight": null,
                    "IconFileName": null,
                    "LargeIconFileName": null,
                    "RollbackFlowGuid": "00000000-0000-0000-0000-000000000000",
                    "UpdateFlowGuid": null,
                    "ExtendProperties": null,
                    "HasAttachement": true,
                    "UseFlowPrint": false,
                    "CommitNotAlertSuccess": false,
                    "GoBackNotAlertSuccess": false,
                    "MenuID": "aa",
                    "BeginNodeIsAutoPost": false,
                    "IsRepeatLaunch": false,
                    "RepeatLaunchTimeInterval": 0,
                    "OtherJson": "{\"CloseFlowEmail\": \"7e96b211-8050-422b-85cb-594f0bba8b8e\",\"NoApprovedEmail\":\"1fa86ea4-498f-44a1-ba6f-8d60048943d1\",\"AppUrl\":\"Leave/AppLeave/Application\",\"AddAppUrl\":\"Leave/AppLeave/Application4\",\"IsCalculateApprover\":\"0\",\"PostRemarkRequired\":\"0\",\"GoBackRemarkRequired\":\"0\",\"RefusedRemarkRequired\":\"0\",\"NotQuery\":\"0\",\"CustomFormXMLPath\":\"\",\"ShowOneStaffView\":\"0\"}",
                    "RevokeType": 0,
                    "Name": {
                        "English": "CopyTest",
                        "Chinese": "CopyTest",
                        "Language1": "CopyTest",
                        "Language2": "CopyTest",
                        "Language3": "CopyTest"
                    },
                    "Other": {
                        "CloseFlowEmail": "7e96b211-8050-422b-85cb-594f0bba8b8e",
                        "NoApprovedEmail": "1fa86ea4-498f-44a1-ba6f-8d60048943d1",
                        "AppUrl": "Leave/AppLeave/Application",
                        "AddAppUrl": "Leave/AppLeave/Application4",
                        "IsCalculateApprover": "0",
                        "PostRemarkRequired": "0",
                        "GoBackRemarkRequired": "0",
                        "RefusedRemarkRequired": "0",
                        "NotQuery": "0",
                        "CustomFormXMLPath": "",
                        "ShowOneStaffView": "0"
                    },
                    "ShouldLog": true
                },
                "Name": {
                    "English": "",
                    "Chinese": "部门经理审批",
                    "Language1": "",
                    "Language2": "",
                    "Language3": ""
                },
                "RemarkLabel": null,
                "ShouldLog": true
            },
            {
                "Guid": "9c971a1e-7b36-440a-b1f2-c93a19f76fd8",
                "CreateUser": "0003                          ",
                "CreateDateTime": "/Date(1491549542000+0800)/",
                "LastUpdateUser": "0003                          ",
                "LastUpdateDateTime": "/Date(1491549542000+0800)/",
                "Code": "BranchEnd13",
                "NodeType": 2,
                "NodeMode": 1,
                "GroupGuid": "00000000-0000-0000-0000-000000000000",
                "SubMode": 0,
                "OrderNo": 0,
                "Description": "",
                "Version": 0,
                "JumpMode": 0,
                "RemarkMode": 0,
                "AllowCustomExecutor": false,
                "AllowCustomCC": false,
                "AllowNextExecutor": false,
                "NextExecutorIsRequired": false,
                "CurrExecutorIsRequired": false,
                "ExecutorWhere1": 0,
                "ExecutorWhere2": 0,
                "AllowCustomCCEmail": false,
                "AllowRevoke": false,
                "AllowBatchCancel": false,
                "AllowBatchOK": false,
                "AllowPriority": false,
                "AllowCustomRollback": false,
                "AllowNextCC": false,
                "NextCCIsRequired": false,
                "CustomCCIsRequired": false,
                "Style": "",
                "Main": {
                    "Guid": "a6b3bb43-99bb-4aa2-b51a-00e062d70531",
                    "CreateUser": "167                           ",
                    "CreateDateTime": "/Date(1398085122000+0800)/",
                    "LastUpdateUser": "0003                          ",
                    "LastUpdateDateTime": "/Date(1476005103000+0800)/",
                    "Code": "CopyTest",
                    "ViewNamePrefix": null,
                    "MainTable": null,
                    "SubFlow": false,
                    "Internal": null,
                    "Priority": 3,
                    "Category": "Performance",
                    "RunMode": 0,
                    "Enable": true,
                    "BatchApproval": false,
                    "BatchRefuse": true,
                    "AttachementType": 1,
                    "Version": null,
                    "TimeOut": null,
                    "AgencyMode": null,
                    "Description": "test",
                    "DialogWidth": null,
                    "DialogHeight": null,
                    "IconFileName": null,
                    "LargeIconFileName": null,
                    "RollbackFlowGuid": "00000000-0000-0000-0000-000000000000",
                    "UpdateFlowGuid": null,
                    "ExtendProperties": null,
                    "HasAttachement": true,
                    "UseFlowPrint": false,
                    "CommitNotAlertSuccess": false,
                    "GoBackNotAlertSuccess": false,
                    "MenuID": "aa",
                    "BeginNodeIsAutoPost": false,
                    "IsRepeatLaunch": false,
                    "RepeatLaunchTimeInterval": 0,
                    "OtherJson": "{\"CloseFlowEmail\": \"7e96b211-8050-422b-85cb-594f0bba8b8e\",\"NoApprovedEmail\":\"1fa86ea4-498f-44a1-ba6f-8d60048943d1\",\"AppUrl\":\"Leave/AppLeave/Application\",\"AddAppUrl\":\"Leave/AppLeave/Application4\",\"IsCalculateApprover\":\"0\",\"PostRemarkRequired\":\"0\",\"GoBackRemarkRequired\":\"0\",\"RefusedRemarkRequired\":\"0\",\"NotQuery\":\"0\",\"CustomFormXMLPath\":\"\",\"ShowOneStaffView\":\"0\"}",
                    "RevokeType": 0,
                    "Name": {
                        "English": "CopyTest",
                        "Chinese": "CopyTest",
                        "Language1": "CopyTest",
                        "Language2": "CopyTest",
                        "Language3": "CopyTest"
                    },
                    "Other": {
                        "CloseFlowEmail": "7e96b211-8050-422b-85cb-594f0bba8b8e",
                        "NoApprovedEmail": "1fa86ea4-498f-44a1-ba6f-8d60048943d1",
                        "AppUrl": "Leave/AppLeave/Application",
                        "AddAppUrl": "Leave/AppLeave/Application4",
                        "IsCalculateApprover": "0",
                        "PostRemarkRequired": "0",
                        "GoBackRemarkRequired": "0",
                        "RefusedRemarkRequired": "0",
                        "NotQuery": "0",
                        "CustomFormXMLPath": "",
                        "ShowOneStaffView": "0"
                    },
                    "ShouldLog": true
                },
                "Name": {
                    "English": "BranchEnd13",
                    "Chinese": "分支结束13",
                    "Language1": "",
                    "Language2": "",
                    "Language3": ""
                },
                "RemarkLabel": {
                    "English": "",
                    "Chinese": "",
                    "Language1": "",
                    "Language2": "",
                    "Language3": ""
                },
                "ShouldLog": true
            },
            {
                "Guid": "c8b85d8b-9d76-4e88-b668-ff0c6d3eac88",
                "CreateUser": "167                           ",
                "CreateDateTime": "/Date(1398085122000+0800)/",
                "LastUpdateUser": "0003                          ",
                "LastUpdateDateTime": "/Date(1433914590000+0800)/",
                "Code": "HR",
                "NodeType": 0,
                "NodeMode": 1,
                "GroupGuid": "00000000-0000-0000-0000-000000000000",
                "SubMode": 0,
                "OrderNo": 1,
                "Description": null,
                "Version": 0,
                "JumpMode": 0,
                "RemarkMode": 0,
                "AllowCustomExecutor": false,
                "AllowCustomCC": false,
                "AllowNextExecutor": null,
                "NextExecutorIsRequired": null,
                "CurrExecutorIsRequired": false,
                "ExecutorWhere1": 0,
                "ExecutorWhere2": 0,
                "AllowCustomCCEmail": false,
                "AllowRevoke": true,
                "AllowBatchCancel": false,
                "AllowBatchOK": false,
                "AllowPriority": false,
                "AllowCustomRollback": false,
                "AllowNextCC": null,
                "NextCCIsRequired": null,
                "CustomCCIsRequired": null,
                "Style": "left: 124px; top: 198px;",
                "Main": {
                    "Guid": "a6b3bb43-99bb-4aa2-b51a-00e062d70531",
                    "CreateUser": "167                           ",
                    "CreateDateTime": "/Date(1398085122000+0800)/",
                    "LastUpdateUser": "0003                          ",
                    "LastUpdateDateTime": "/Date(1476005103000+0800)/",
                    "Code": "CopyTest",
                    "ViewNamePrefix": null,
                    "MainTable": null,
                    "SubFlow": false,
                    "Internal": null,
                    "Priority": 3,
                    "Category": "Performance",
                    "RunMode": 0,
                    "Enable": true,
                    "BatchApproval": false,
                    "BatchRefuse": true,
                    "AttachementType": 1,
                    "Version": null,
                    "TimeOut": null,
                    "AgencyMode": null,
                    "Description": "test",
                    "DialogWidth": null,
                    "DialogHeight": null,
                    "IconFileName": null,
                    "LargeIconFileName": null,
                    "RollbackFlowGuid": "00000000-0000-0000-0000-000000000000",
                    "UpdateFlowGuid": null,
                    "ExtendProperties": null,
                    "HasAttachement": true,
                    "UseFlowPrint": false,
                    "CommitNotAlertSuccess": false,
                    "GoBackNotAlertSuccess": false,
                    "MenuID": "aa",
                    "BeginNodeIsAutoPost": false,
                    "IsRepeatLaunch": false,
                    "RepeatLaunchTimeInterval": 0,
                    "OtherJson": "{\"CloseFlowEmail\": \"7e96b211-8050-422b-85cb-594f0bba8b8e\",\"NoApprovedEmail\":\"1fa86ea4-498f-44a1-ba6f-8d60048943d1\",\"AppUrl\":\"Leave/AppLeave/Application\",\"AddAppUrl\":\"Leave/AppLeave/Application4\",\"IsCalculateApprover\":\"0\",\"PostRemarkRequired\":\"0\",\"GoBackRemarkRequired\":\"0\",\"RefusedRemarkRequired\":\"0\",\"NotQuery\":\"0\",\"CustomFormXMLPath\":\"\",\"ShowOneStaffView\":\"0\"}",
                    "RevokeType": 0,
                    "Name": {
                        "English": "CopyTest",
                        "Chinese": "CopyTest",
                        "Language1": "CopyTest",
                        "Language2": "CopyTest",
                        "Language3": "CopyTest"
                    },
                    "Other": {
                        "CloseFlowEmail": "7e96b211-8050-422b-85cb-594f0bba8b8e",
                        "NoApprovedEmail": "1fa86ea4-498f-44a1-ba6f-8d60048943d1",
                        "AppUrl": "Leave/AppLeave/Application",
                        "AddAppUrl": "Leave/AppLeave/Application4",
                        "IsCalculateApprover": "0",
                        "PostRemarkRequired": "0",
                        "GoBackRemarkRequired": "0",
                        "RefusedRemarkRequired": "0",
                        "NotQuery": "0",
                        "CustomFormXMLPath": "",
                        "ShowOneStaffView": "0"
                    },
                    "ShouldLog": true
                },
                "Name": {
                    "English": "",
                    "Chinese": "HR",
                    "Language1": "",
                    "Language2": "",
                    "Language3": ""
                },
                "RemarkLabel": null,
                "ShouldLog": true
            }
        ],
        "Jumps": [
            {
                "SourceId": "040ca436-25b4-492a-8b9a-215ffa31160f",
                "TargetId": "a726c8af-ea8e-426c-a650-c713c00d3ad5",
                "Text": "同意",
                "JumpId": "6cd83ddf-b080-419b-99bb-b62537a8fc99"
            },
            {
                "SourceId": "040ca436-25b4-492a-8b9a-215ffa31160f",
                "TargetId": "a726c8af-ea8e-426c-a650-c713c00d3ad5",
                "Text": "同意",
                "JumpId": "f1387a63-611c-4347-9586-efa0f6852c62"
            },
            {
                "SourceId": "dfab9d20-7ef5-460e-bf3e-79d2f9941ff3",
                "TargetId": "c8b85d8b-9d76-4e88-b668-ff0c6d3eac88",
                "Text": "同意",
                "JumpId": "42511abd-456b-4efc-a824-0bc66c743a73"
            },
            {
                "SourceId": "dfab9d20-7ef5-460e-bf3e-79d2f9941ff3",
                "TargetId": "a726c8af-ea8e-426c-a650-c713c00d3ad5",
                "Text": "拒绝",
                "JumpId": "2ce09d62-a601-45fd-8a0f-559856951633"
            },
            {
                "SourceId": "cc2b961b-229e-41be-95ee-acb1153c5091",
                "TargetId": "a726c8af-ea8e-426c-a650-c713c00d3ad5",
                "Text": "退回",
                "JumpId": "e90234d1-fb58-4985-b633-a1629adffd3d"
            },
            {
                "SourceId": "a726c8af-ea8e-426c-a650-c713c00d3ad5",
                "TargetId": "cc2b961b-229e-41be-95ee-acb1153c5091",
                "Text": "同意",
                "JumpId": "a4f99d67-6904-477f-a441-670288abb328"
            },
            {
                "SourceId": "a726c8af-ea8e-426c-a650-c713c00d3ad5",
                "TargetId": "c8b85d8b-9d76-4e88-b668-ff0c6d3eac88",
                "Text": "退回",
                "JumpId": "57b5f310-b3dd-4972-a5a8-4434253d084b"
            },
            {
                "SourceId": "c8b85d8b-9d76-4e88-b668-ff0c6d3eac88",
                "TargetId": "a726c8af-ea8e-426c-a650-c713c00d3ad5",
                "Text": "同意",
                "JumpId": "0389d909-fef7-4e42-a640-1870609d6c7e"
            }
        ]
    }
    var $container = $('#container');

    instance = jsPlumb.getInstance({
        Endpoint : ["Dot", {radius:2}],
        HoverPaintStyle: { strokeStyle: "#1e8151", lineWidth: 2 },
        ConnectionOverlays : [
            [ "Arrow", {location: 1, id:"arrow", length:10, foldback:0.8, width: 10} ],
            [ "Label", { label:"", id:"label", cssClass:"labelstyle" }]
        ],
        DragOptions : { zIndex:2000 },
        Container:"topocontent"
    });
    window.jsp = instance;
    var lineColor = '#2f8e00',
        pstyle = {
            Endpoint: ["Dot", { radius: 2 }],
            paintStyle: {
                strokeStyle: lineColor,
                fillStyle: 'none'
            },
            // connector: ["Flowchart", {stub: [0, 0], gap: 2, cornerRadius: 5, alwaysRespectStubs: true }],
            //连接线的样式种类有[Bezier],[Flowchart],[StateMachine ],[Straight ]
            connector: ["Flowchart", {stub: [0, 0], gap: 2, cornerRadius: 5, alwaysRespectStubs: true }],
            connectorStyle: {
                lineWidth: 1,
                strokeStyle: lineColor
            },
            maxConnections: -1
        };

    editData(initialData);
    function editData(data) {
        var nodes = data.Nodes;
        var jumps = data.Jumps;
        //添加节点
        nodes.forEach(function(item,index,arr){
            var $item = $('<div class="item" style="" id=""><span class="text"></span><span class="dragPoint"></span></div>')
            $item.attr({'id':item.Guid})
            $item.attr({'style':item.Style})
            $item.find('.text').text(item.Name.Chinese)
            $container.append($item)
        })
        //添加连线
        var windowsDrag = $('#container .item')
        renderConnect(windowsDrag);

        //------------更改样式-------------
        for( var i in jumps){
            renderConnecter(jumps[i])
        }
    }
    //添加连线
    function renderConnecter(jump) {

            var conor = instance.connect({ source: jump.SourceId, target:jump.TargetId});
            conor.getOverlay("label").setLabel(jump.Text);
            conor.setPaintStyle({fillStyle : 'none', strokeStyle: '#2F8E00'});
            conor.bind('click',function(){
                detachLine(this);
            });

    }
    
    function renderConnect(newid){//渲染
        instance.draggable(newid);
        instance.doWhileSuspended(function(){
            var isFilterSupported = instance.isDragFilterSupported();
            if(isFilterSupported){
                instance.makeSource(newid, {filter:".dragPoint",anchor:"Continuous"}, pstyle);
            }else{
                var eps = jsPlumb.getSelector(".dragPoint");
                for (var i = 0; i < eps.length; i++) {
                    var e = eps[i], p = e.parentNode;
                    instance.makeSource(e, {parent:p, anchor:"Continuous"}, pstyle);
                }
            }
        });
        instance.makeTarget(newid, {dropOptions:{hoverClass:"dragHover"}, anchor:"Continuous"}, pstyle);
    }



    /*以下为操作函数*/
    var currentNode; //当前操作的节点
    var currentConnection; //当前连线
    $('.wrap').on('contextmenu',function (e) {
         e=e||event
         target = e.target||e.srcElement
         currentNode = target
;        if($(target).hasClass('wrap')){
            var $menu = $('.wrapMenu');
            toggleMenu($menu,e,true);
        }else if($(target).hasClass('item')||$(target).hasClass('text')){
            var $menu = $('.nodeMenu');
            toggleMenu($menu,e,true);
        }else{
            var $menu = $('.pathMenu');
            toggleMenu($menu,e,true);
        }

        return false;
    });
    $('.wrap').on('click',function(e){
        $('.todoMenu').css({'display':'none'})
    })
    /*menu操作*/
    function toggleMenu($menu,e,flag) {
        $('.todoMenu').css({'display':'none'})
        if(flag){
            $menu.css({"display":'block','position':'fixed','zIndex':'20'});
            $menu.css({'left':e.clientX,'top':e.clientY})
        }else{
            $menu.css({'display':'none'})
        }
    }

    //增加节点
    $(document).on('click','.wrapMenu #addNode',function (e) {

        var $item = $('<div class="item" style="" id="item"><span class="text">新增节点</span><span class="dragPoint"></span></div>')
        $container.append($item);
        instance.draggable('item');
        var $menu = $(this).closest('.todoMenu');
        toggleMenu($menu,e,false);

        var id= $item.attr('id');
        renderConnect(id);

    })

    //删除当前节点
    $(document).on('click','.nodeMenu .deleteNode',function(e){
        var $currentNode
        var currentId
        if($(currentNode).hasClass('item')){
            $currentNode =$(currentNode)
        }else{
            $currentNode = $(currentNode).closest('.item')
        }
        currentId = $currentNode.attr('id');
        console.log(currentId);
        var sourceConn = instance.getConnections({ source: currentId });
        $.each(sourceConn, function (scopeName, conn) {
            instance.detach(conn);
        });

        //获得当前节点的目标数据连接，并删除该连接
        var targetConn = instance.getConnections({ target: currentId });
        $.each(targetConn, function (scopeName, conn) {
            instance.detach(conn);
        });
        $currentNode.remove();
        $('.todoMenu').css({'display':'none'})
    })
    /*删除连线*/
    instance.bind('contextmenu',function(c,e){
        debugger;
        currentConnection = c
    })

    $(document).on('click','.pathMenu .deletePath',function(){
        instance.detach(currentConnection); //删除连线
    });
    $(document).on('click','.menu .save', function() {
        var conns = instance.getAllConnections();//获取所有连线
        var windows = jsPlumb.getSelector("#container .item");//获取所有节点

    });
    //获取label的联系
    var connArr = [];

    /*连线后触发*/
    instance.bind("connection", function (info) {
        debugger;

        var labelText = '同意';
        var connInfo = {sourceID:info.sourceId,targetId:info.targetId,labelText:labelText};
        connArr.push(connInfo);
        info.connection.id = '0001';
        info.connection.setLabel(labelText);
        console.log(info);
        if(info.sourceId == info.targetId){
            alert('不能让以自己为目标元素');
            instance.detach(info);
        }
        connArr.forEach(function (item,index,arr) {
            renderConnecter(item);
        });
    });




    // instance.bind("connectionDragStop", function(info) {//点击连接线、overlay、label提示删除连线 + 不能以自己作为目标元素
    //     if(info.sourceId == info.targetId){
    //         $.popupTips('不能以自己作为目标元素');
    //         instance.detach(info);
    //     }else{
    //         info.unbind('click');
    //         info.bind('click',function(){
    //             detachLine(info);
    //         });
    //     };
    // });
    //取消连接
    // jsPlumb.bind("connectionDetached", function (conn, originalEvent) {
    //     if (conn.sourceId == conn.targetId) {
    //         //自己连接自己时会自动取消连接
    //     }else{
    //         alert("删除连接从" + conn.sourceId + "到" + conn.targetId + "！");
    //     }
    // });
})