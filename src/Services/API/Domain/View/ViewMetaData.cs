namespace API.Domain.View
{
    public class ViewMetaData
    {
       public IEnumerable<ViewProperties> ViewProperties { get;set;}
        public IEnumerable<ViewDetails> ViewDetails { get;set;}
        public IEnumerable<ViewDependency> ViewDependencies { get;set;}
        public ViewCreateScript ViewCreateScript { get;set;}
        public IEnumerable<ViewColumns> ViewColumns { get;set;}
    }
}

