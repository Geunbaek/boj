import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.io.IOException;

public class Main {
    public static void main(String[] args) throws IOException {
        // 1. 입력 받기 (버퍼를 이용해 빠르게 입력받음)
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        
        String A = br.readLine();
        String B = br.readLine();
        String C = br.readLine();
        
        // [출력 1] 수로서의 연산: A + B - C
        // Integer.parseInt()를 사용하여 문자열을 숫자로 변환합니다.
        int intA = Integer.parseInt(A);
        int intB = Integer.parseInt(B);
        int intC = Integer.parseInt(C);
        
        System.out.println(intA + intB - intC);
        
        // [출력 2] 문자열로서의 연산: A와 B를 붙인 뒤 C를 뺌
        // Java에서 문자열끼리 + 연산을 하면 이어 붙여집니다. ("3" + "4" = "34")
        String abStr = A + B;
        
        // 합친 문자열을 다시 숫자로 변환하여 계산
        int intAB = Integer.parseInt(abStr);
        
        System.out.println(intAB - intC);
    }
}