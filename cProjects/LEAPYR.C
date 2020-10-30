#include<conio.h>
#include<stdio.h>
void main()
{int a;
clrscr();
printf("Enter year :");
scanf("%d",&a);
if(a%4==0)
{
printf("leap year");
}
else
{
printf("not a leap year");
}
getch();
}