def get_emoticon_cost(emoticon_cost, discount_rate):
    return emoticon_cost * (1 - discount_rate * 0.01)

def get_total_pay(user, emoticons_with_rate):
    pay = 0
    for emoticon in emoticons_with_rate:
        if user["rate"] <= emoticon["rate"]:
            pay += get_emoticon_cost(emoticon["cost"], emoticon["rate"])
    return pay

def is_joined(user, total_pay):
    return total_pay >= user["cost"]

def create_user(user):
    rate, cost = user
    return {
        "rate": rate,
        "cost": cost
    }
    
def create_emoticon(emoticon, rate):
    return {
        "cost": emoticon, 
        "rate": rate
    }
    
def get_result(users, emoticons_with_rate):
    joined = 0
    cost = 0
    for user in users:
        total = get_total_pay(user, emoticons_with_rate)
        if is_joined(user, total):
            joined += 1
        else:
            cost += total
    return [joined, cost]
    
def recur(emoticons, rates, users, results):
    if len(rates) >= len(emoticons):
        emoticons_with_rate = [create_emoticon(e, r) for e, r in zip(emoticons, rates)]
        results.append(get_result(users, emoticons_with_rate))
        return
    
    for rate in [10, 20, 30, 40]:
        recur(emoticons, rates + [rate], users, results)
    
def solution(users, emoticons):
    discount_rates = [10, 20, 30, 40]
    results = []
    users = [create_user(user) for user in users]
    recur(emoticons, [], users, results)
    results.sort(key = lambda x: (-x[0], -x[1]))
    return results[0]