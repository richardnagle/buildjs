namespace buildjs.Model
{
    public class Team
    {
        public Team()
        {
            IsVisible = true;
        }

        public int Id { get; set; }
        public string Name { get; set; }

        public string SubTitle { get; set; }

        public int ForegroundColour { get; set; }
        public int BackgroundColour { get; set; }
        public bool IsVisible { get; set; }
    }
}
