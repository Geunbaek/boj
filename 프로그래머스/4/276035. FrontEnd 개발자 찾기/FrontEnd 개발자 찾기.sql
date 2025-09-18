-- 코드를 작성해주세요

select FE.id, FE.email, FE.first_name, FE.last_name
from (
    select distinct id, category, skill_code, email,first_name,last_name from developers
    left join skillcodes on skillcodes.code & skill_code
    having category = "Front End"
) as FE
order by FE.id asc;

# select distinct id, category, skill_code from developers
# left join skillcodes on skillcodes.code & skill_code
# having category = "Front End";
