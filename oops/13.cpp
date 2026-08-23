class Animal
{
public:
    virtual void sound() = 0;
};

class Dog : public Animal
{
};

int main()
{
    Dog d;      // ❌ ERROR



Animal *ptr;

Dog d;

ptr = &d;

ptr->sound();


}