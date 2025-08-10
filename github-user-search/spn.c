#include <unistd.h>
int ft_atoi(char *str)
{
    int i =0;
    int sign = 1;
    int res = 0;
    while (str[i] == 32 || ( str[i] >= 9 && str[i] <= 13)){
        i++;
    }
    if (str[i] == '-' || str[i] == '+'){
        if (str[i] == '-')
        {
            sign = -1;
        }
        i++;
    }
    while (str[i] >= '0' && str[i] <= '9'){
        res = res * 10 + str[i] - 48;
        i++;
    }
        return (res * sign);
}
void ft_putnbr(int nbr)
{
    char c;
    long n;
    n = nbr;
    if (n < 0)
    {
        write (1, "-", 1);
        n = -n;
    }
    if (n >= 10)
    {
        ft_putnbr(n /10);
    }
    c = n % 10 + 48;
    write (1, &c, 1);
}
int main(int ac, char **av) {
    if (ac == 4)
    {
        int a = ft_atoi(av[1]);
        int b = ft_atoi(av[3]);
        char c = av[2][0];
        if (c == '+'){
            ft_putnbr(a + b);
        }else if (c == '-')
        {
            ft_putnbr(a - b);
        }else if (c == '/')
        {
            ft_putnbr(a / b);
        }else if (c == '%'){
        ft_putnbr(a % b);
    }
    }
    return 0;
}