#ifndef MOCKPROJECT_FILELIB_H
#define MOCKPROJECT_FILELIB_H

#include <stdio.h>
#include <string.h>
#include <stdlib.h>
#include "SREC.h"

#define MAX_COL 200

// ĐỌc dữ liệu từ file và trả về danh sách các dòng text
// : param fileName
// :param Line Row

char ** readFile(char *fileName, int lineRow);
// Ghi dữ liệu vào file  -> Address data  của 1 srec trên mỗi dòng dòngcuar output
void writeSRECData(char  *fileName, SRECStructure** listData, int length);

#endif
