def plus_month(target, month):
    next_month = target['month'] + month
    next_year = target['year'] + next_month // 12
    return { 
        "year": next_year, 
        "month": next_month % 12, 
        "date": target["date"]
    }
    
def is_expired(expired_day, today):
    if expired_day['year'] < today['year']:
        return True
    if expired_day['year'] > today['year']:
        return False
    if expired_day['month'] < today['month']:
        return True
    if expired_day['month'] > today['month']:
        return False
    return expired_day['date'] <= today['date']
    
def is_deleted(today, start, period):
    expired = plus_month(start, period)
    return is_expired(expired, today)

def create_day(str_day):
    year, month, date = map(int, str_day.split("."))
    return {
        "year": year,
        "month": month - 1,
        "date": date
    }

def solution(today, terms, privacies):
    today = create_day(today)
    term_cache = {}
    
    for term in terms:
        term_name, period = term.split()
        term_cache[term_name] = int(period)
    
    answer = []
    for i, privacy in enumerate(privacies):
        start, term_name = privacy.split()
        start_day = create_day(start)
        if is_deleted(today, start_day, term_cache[term_name]):
            answer.append(i + 1)
    
    return answer