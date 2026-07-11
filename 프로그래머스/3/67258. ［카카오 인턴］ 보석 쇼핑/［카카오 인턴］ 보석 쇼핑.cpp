#include <string>
#include <vector>
#include <unordered_map>
#include <algorithm>
#include <iostream>

using namespace std;
using ll = long long;

unordered_map<string, int> ss;
vector<int> mm;
vector<vector<int>> ans;
int N, l, r;

vector<int> solution(vector<string> gems) {
    ss.clear();
    mm.clear();
    ans.clear();
    N = l = r = 0;

    vector<int> gemNum(gems.size());

    // 문자열을 정수 번호로 변환
    for (int i = 0; i < gems.size(); i++) {
        auto it = ss.find(gems[i]);

        if (it == ss.end()) {
            int num = ss.size();
            ss[gems[i]] = num;
            gemNum[i] = num;
        } else {
            gemNum[i] = it->second;
        }
    }

    N = ss.size();
    mm.assign(N, 0);

    int cnt = 0;

    for (r = 0; r < gems.size(); r++) {
        // 해당 보석이 현재 구간에 처음 들어온 경우
        if (mm[gemNum[r]] == 0)
            cnt++;

        mm[gemNum[r]]++;

        if (cnt < N)
            continue;

        while (l <= r && cnt == N) {
            ans.push_back({l + 1, r + 1});

            mm[gemNum[l]]--;

            // 해당 보석이 현재 구간에서 사라진 경우
            if (mm[gemNum[l]] == 0)
                cnt--;

            l++;
        }
    }

    sort(ans.begin(), ans.end(), [](auto& a, auto& b) {
        if ((a[1] - a[0]) != (b[1] - b[0]))
            return (a[1] - a[0]) < (b[1] - b[0]);

        if (a[0] != b[0])
            return a[0] < b[0];

        return a[1] < b[1];
    });

    return ans[0];
}